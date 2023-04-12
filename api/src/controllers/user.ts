import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handler';
import { UserInterface, UserQuery } from '../interfaces/User';
import { trimObject } from "../helpers/trimProperties";
import {
  addFavoriteVideogame_S,
  deleteUser_S, getAllUsers_S,
  setUser_S, updateUser_S,
  getAllFavoritesVideo_S, getUserId_S,
  removeFavoriteVideogame_S
} from '../services/user';


export const getUsers = async (req: Request, res: Response) => {
  try {
    let querys: UserQuery = req.query

    //limpiamos
    trimObject(querys)

    let result = await getAllUsers_S(querys)

    return res.status(202).json({
      status: "sucess",
      page: result.page,
      totalPages: result.totalPages,
      TotalCount: result.totalCount,
      result: result.users
    })
  } catch (error) {
    console.log(error);

    return handleHttp(res, "aas")
  }
}


export const getUserId = async (req: Request, res: Response) => {
  try {
    let userId: number = Number(req.params.userId)


    let userDetail = await getUserId_S(userId)

    return res.status(202).json({
      status: "sucess",
      ...userDetail?.dataValues
    })
  } catch (error) {
    console.log(error);

    return handleHttp(res, "aas")
  }
}


export const postUser = async (req: Request, res: Response) => {

  try {
    let newUser: UserInterface = req.body

    //limpiamos
    trimObject(newUser)

    let user = await setUser_S(newUser)

    return res.status(202).json(user)
  } catch (error) {
    let { message }: any = error
    handleHttp(res, message)
  }
}

export const putUser = async (req: Request, res: Response) => {
  try {
    let newUser: UserInterface = req.body

    //limpiamos
    trimObject(newUser)

    let user = await updateUser_S(newUser)

    return res.status(202).json({
      status: "sucess",
      newUser: user
    })
  } catch (error) {
    let { message }: any = error
    handleHttp(res, message)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    let userId: number = req.body.id


    let user = await deleteUser_S(userId)

    return res.status(202).json({
      status: "sucess",
      newUser: user
    })
  } catch (error) {
    let { message }: any = error
    handleHttp(res, message)
  }
}

/*****************************  EXTRAS  ***************************** */

export const addFavoriteVideogame = async (req: Request, res: Response) => {
  try {
    let userId: number = Number(req.body.userId)
    let videogameId: number = Number(req.body.videogameId)

    let result = await addFavoriteVideogame_S(userId, videogameId)

    return res.status(202).json({
      status: "sucess",
      message: "Se agrego exitosamente a favoritos",
      result: result
    })
  } catch (error) {
    let { message }: any = error
    handleHttp(res, message)
  }
}

export const removeFavoriteVideogame = async (req: Request, res: Response) => {
  try {
    let userId: number = Number(req.body.userId)
    let videogameId: number = Number(req.body.videogameId)

    let result = await removeFavoriteVideogame_S(userId, videogameId)

    return res.status(202).json({
      status: "sucess",
      message: "Se elimino exitosamente de favoritos",
      result: result
    })
  } catch (error) {
    let { message }: any = error
    handleHttp(res, message)
  }
}

export const getAllVideoggamesFavorite = async (req: Request, res: Response) => {
  try {
    let userId: number = Number(req.body.userId)

    let result = await getAllFavoritesVideo_S(userId)

    return res.status(202).json({
      status: "sucess",
      message: "Se extrajo exitosamente los videogames favoritos",
      totalCount: result.totalCount,
      result: result.videogames
    })
  } catch (error) {
    let { message }: any = error
    handleHttp(res, message)
  }
}

