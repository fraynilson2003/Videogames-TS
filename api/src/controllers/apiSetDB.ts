import dotenv from 'dotenv';
dotenv.config();
const {
    MY_KEY_API
  } = process.env;

import axios from "axios";
import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handler';
import { GenderInterface } from '../interfaces/Gender';
import { VideogameInterface } from '../interfaces/Videogames';
import Gender from '../models/Gender';
import Videogame from '../models/Videogames';
import fs from 'fs';
import { setVideogames } from '../handlers/videogames';
import { awaitSeconds } from '../helpers/awaitSeconds';


let lorem = "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure"

export const getAllPageAPI = async(pageNu: number[])=>{
  let videogames: VideogameInterface[] = []

  let promises = pageNu.map((page)=>{
    return axios.get('https://api.rawg.io/api/games', {
      params: {
        key: MY_KEY_API,
        page: page, //numero de pagina
        page_size: 10,
      }}
  ).then((res)=>res.data.results.map((vid: any)=>{
    let modiVideogame: VideogameInterface = {
      name: (vid.name? vid.name: "none"),
      description: (vid.description?vid.description:lorem) ,
      released: (vid.released? vid.released: "none"),
      background_image: vid.background_image? vid.background_image: "none",
      genders: vid.genres?.map((det: GenderInterface):number=>{
        return Number(det.id)
      }),
      }
    videogames.push(modiVideogame)
  }))
  .catch(error => {
    throw Error(error)
  })
  })

  await Promise.all(promises)


  return videogames
}

export const setVideogamesDB = async(req: Request, res: Response)=>{
  try {
    let pages: number[] = req.body.pages
    let APIPromise = await getAllPageAPI(pages)

    let setPromise = APIPromise.map(async(vid: VideogameInterface) => {
 
      await awaitSeconds(5)
      let res = await setVideogames(vid)
      return res
    });
    
    return res.status(202).json({
      status: "success",
      result: setPromise
    })
  } catch (error) {
    let {message}: any = error
    console.log(message);
    
    handleHttp(res, message)
  }
}


export const getAllGenerAPI = async()=>{
  try {
    let API = await axios.get(`https://api.rawg.io/api/genres`, {
      params: {
          key: MY_KEY_API,
      }
    }).then(res=>res.data.results.map((gene: GenderInterface)=>{
      return {
        id: gene.id,
        name: gene.name,
        image_background: gene.image_background,
        description: gene.description
      }
    }))
    .catch(error=>{
      let {message}: any = error
      throw new Error(message)
    })

    return API
  } catch (error) {
    let {message}: any = error
    throw new Error(message)
  }

}

export const setGenresDB = async(req: Request, res: Response)=>{
  try {
    let genersAPI = await getAllGenerAPI()
    //Ponemos a la DATA BASE todos los generos
    let setPromise = genersAPI.map((ele: GenderInterface) => {
        return  Gender.create({...ele})
    });
    await Promise.all(setPromise)
       
    return res.status(202).json({
      status: "success"
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }

}

