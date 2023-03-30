import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handler';
import { VideogameInterface, VideogameQuery } from "../interfaces/Videogames";
import { 
  setVideogames, 
  deleteVideoGame_S, 
  updateVideogame, 
  getAllVideogames_S, 
  getVideogameById_S 
} from '../services/videogames';
import { trimObject } from "../helpers/trimProperties";


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



