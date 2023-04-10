import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handler';
import { VideogameInterface, VideogameQuery, img } from '../interfaces/Videogames';
import {
  setVideogames,
  deleteVideoGame_S,
  updateVideogame,
  getAllVideogames_S,
  getVideogameById_S
} from '../services/videogames';
import { trimObject } from "../helpers/trimProperties";
import { uploadImg } from '../utils/cloudinary';
import Videogame from '../models/Videogames';
import fs from 'fs-extra';


export const getVideoGames = async(req: Request, res: Response)=>{
  try {

    let querys: VideogameQuery = req.query

    //limpiamos
    trimObject(querys)

    let result = await getAllVideogames_S(querys)

    return res.status(202).json({
      status: "sucess",
      page: result.page,
      totalPages: result.totalPages,
      TotalCount: result.totalCount,
      result: result.videogames
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}

export const getVideoGameId = async(req: Request, res: Response)=>{
  try {

    let idVideogame: number = Number(req.params.idVideogame)

    let result = await getVideogameById_S(idVideogame)

    return res.status(202).json({
      status: "sucess",
      result: result
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}

export const postVideogame = async(req: Request, res: Response)=>{

  try {
    let newVideogame: VideogameInterface = req.body

    //limpiamos
    trimObject(newVideogame)
    let videoGame = await setVideogames(newVideogame)

    return res.status(202).json({
      status: "sucess",
      newVideogame: videoGame
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}

export const putVideogameImg = async(req: Request, res: Response)=>{
  let errors = false;
  let idVideogame: number = Number(req.body.id)
  let fileImage: img = {...req.files}
  try {
    let propertysVid: VideogameInterface = {
      id: idVideogame
    }

    const resultImg = await uploadImg(String(fileImage?.image?.tempFilePath));
    if (resultImg.error){
      errors = true;
      throw new Error("could not upload image")
    }

    //delete img
    let deleteImg = await fs.unlink(String(fileImage?.image?.tempFilePath), (err)=>{
      console.log(err);
    })

    propertysVid.background_image = resultImg.secure_url;
    propertysVid.id_background_image = resultImg.public_id;

    let result = await updateVideogame(propertysVid)

    return res.status(202).json({
      status: "sucess sssssssssssssss",
      newVideogame: result,
      resultImg: resultImg
    })
  } catch (error) {
    //delete img
    let deleteImg = await fs.unlink(String(fileImage?.image?.tempFilePath), (err)=>{
      console.log(err);
    })

    let {message}: any = error
    handleHttp(res, message)
  }
}

export const putVideogame = async(req: Request, res: Response)=>{

  try {
    let newVideogame: VideogameInterface = req.body

    //limpiamos
    trimObject(newVideogame)
    let videoGame = await updateVideogame(newVideogame)

    return res.status(202).json({
      status: "sucess",
      newVideogame: videoGame
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}

export const deleteVideogame = async(req: Request, res: Response)=>{
  try {
    //limpiamos
    trimObject(req.body)

    let idVideogame: number = Number(req.body.id)

    let videoGame = await deleteVideoGame_S(idVideogame)

    return res.status(202).json({
      status: "sucess",
      message: "Se elimino correctamente",
      result: videoGame
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}



