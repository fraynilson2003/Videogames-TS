import { orderDb } from "../interfaces/SequelizeProp";
import { UserEnum, UserInterface, UserQuery } from "../interfaces/User";
import User from "../models/User";
import { Request } from 'express';
import { Op } from 'sequelize';
import { getAllVideogames_S } from './videogames';
import Videogame from '../models/Videogames';
import { deleteVideogame } from '../controllers/videogames';

export let getAllUsers_S = async(reqQuery: UserQuery)=>{
  try {
    //paginacion
    let page: number =  Number(reqQuery.page)? Number(reqQuery.page) : 1
    let page_size: number =  Number(reqQuery.page_size)? Number(reqQuery.page_size) : 20
    const offset = (page - 1) * page_size;


    //filtros
    let queryName: UserInterface = {}
    if(reqQuery.name){
      queryName.name = {[Op.iLike]:`%${reqQuery.name}%`}
    }

    //orden
    let orderName: any = []

    if(reqQuery.orderABC){
      orderName = [[UserEnum.name, String(reqQuery.orderABC)]]
    }else{
      orderName = [[UserEnum.name, orderDb.Asc]]
    }

    //getUsers
    let users = await User.findAll({
      where: {...queryName},
      limit: page_size,
      offset: offset,
      order: [...orderName],

    })

    //Count
    let totalCount = await User.count({
      where: {...queryName},
    })
    const totalPages = Math.ceil(totalCount / page_size);

    return {
      page: page,
      totalPages: totalPages,
      totalCount: totalCount,
      users: users,
    }
    
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let getUserId_S = async(id: number)=>{
  try {
    let userDetail = await User.findOne({
      where: {id: id},
      include: {
        model: Videogame,
        as: "Videogames",
        through: {
          attributes: []
        }
      }
    })
    return userDetail
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let setUser_S = async(user: UserInterface)=>{
  
  try {
    let existUser = await User.findOne({
      where: {email: user.email}
    })

    if(existUser){
      return {
        status: "sucess",
        message: "login",
        user: existUser
      }
    }

    let newUser = await User.create({...user})
    return {
      status: "sucess",
      message: "created",
      user: newUser
    }
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}


export let updateUser_S = async(user: UserInterface)=>{
  try {
    let idUser: number = Number(user.id)
    delete user.id

    let newUser = await User.findByPk(idUser)
    let putUser = await newUser?.update({...user})

    return newUser
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let deleteUser_S = async(id: number)=>{
  try {

    let newUser = await User.findByPk(id)
    let deleteUser = await newUser?.update({
      active: false
    })

    return deleteUser
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

/***************** EXTRAS  ****************** */

export let addFavoriteVideogame_S = async(userId: number, videogameId: number)=>{
  try {

    let user = await User.findByPk(userId)
    let result = await user?.addVideogame(videogameId)

    return result
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let removeFavoriteVideogame_S = async(userId: number, videogameId: number)=>{
  try {

    let user = await User.findByPk(userId)
    let result = await user?.removeVideogame(videogameId)

    return result
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let getAllFavoritesVideo_S = async(userId: number)=>{
  try {

    let user = await User.findByPk(userId)
    let videogames = await user?.getVideogames()

    //limpiamos
    videogames?.forEach(vid=>{
      delete vid.dataValues.UserVideogame
    })

    let totalCount = await Videogame.count({
      include: {
        model: User,
        as: "Users",
        where: {id: userId},
        through: {
          attributes: []
        }
      }
    })

    return {
      totalCount: totalCount,
      videogames: videogames
    }
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}