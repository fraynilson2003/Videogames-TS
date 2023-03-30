
import { VideogameEnum, VideogameInterface, VideogameQuery } from "../interfaces/Videogames";
import { Op } from 'sequelize';
import Videogame from "../models/Videogames";
import Gender from '../models/Gender';
import { orderDb } from '../interfaces/SequelizeProp';

export let getAllVideogames_S = async(reqQuery: VideogameQuery)=>{
  try {
    //paginacion
    let page: number =  Number(reqQuery.page)? Number(reqQuery.page) : 1
    let page_size: number =  Number(reqQuery.page_size)? Number(reqQuery.page_size) : 20
    const offset = (page - 1) * page_size;


    //filtros
    let queryName: VideogameInterface = {}
    if(reqQuery.name){
      queryName.name = {[Op.iLike]:`%${reqQuery.name}%`}
    }


    //filtro gender
    let queryGender: any
    let ifGender: boolean = false
    if(reqQuery.gender){
      queryGender = Number(reqQuery.gender)
      ifGender = true
    }
    
  //orden
  let orderName: any = []

  if(reqQuery.orderABC){
    orderName = [[VideogameEnum.name, String(reqQuery.orderABC)]]
  }else{
    orderName = [[VideogameEnum.name, orderDb.Asc]]
  }

    //getVideogames
    let videogames
    if(!ifGender){
      videogames = await Videogame.findAll({
        where: {...queryName},
        limit: page_size,
        offset: offset,
        order: [...orderName],
        attributes: {exclude: [VideogameEnum.description]},
        include: [
          {
            model: Gender,
            as: "Genders",
            through: { 
              attributes:[]
            }
          }
        ]
      })
    }else{      
      videogames = await Videogame.findAll({
        where: {...queryName},
        limit: page_size,
        offset: offset,
        order: [...orderName],
        attributes: {exclude: [VideogameEnum.description]},
        include: [
          {
            model: Gender,
            as: "Genders",
            where: {id: queryGender},
            through: { 
              attributes:[]
            }
          }
        ]
      })
    }

    //Count
    let totalCount 
    if(!ifGender){
      totalCount = await Videogame.count({
        where: {...queryName},
      })
    }else{      
      totalCount = await Videogame.count({
        where: {...queryName},
        include: [
          {
            model: Gender,
            as: "Genders",
            where: {id: queryGender},
            through: { 
              attributes:[]
            }
          }
        ]
      })
    }
    const totalPages = Math.ceil(totalCount / page_size);

    return {
      page: page,
      totalPages: totalPages,
      totalCount: totalCount,
      videogames: videogames,
    }
    
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let getVideogameById_S = async(id: number)=>{
  try {
    let videogameDetail = await Videogame.findOne({
      where: {id: id},
      include: [
        {
          model: Gender,
          as: "Genders",
          through: { 
            attributes:[]
          }
        }
      ]
    })


    return videogameDetail
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let setVideogames = async(videogame: VideogameInterface)=>{
  
  try {
    //sacamos los id de los Genders
    let idGenders: number[] = []
    if(videogame.genders?.length){
      idGenders = [...videogame.genders]
      delete videogame.genders
    }

    let newVideoG = await Videogame.create({...videogame})
    let videoAddGender = await newVideoG.setGenders(idGenders)

    return newVideoG
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let updateVideogame = async(user: VideogameInterface)=>{
  
  try {
    //sacamos los id de los Genders
    let idGenders: number[] = []
    if(user.genders?.length){
      idGenders = [...user.genders]
      delete user.genders
    }

    let idVideogame: number = Number(user.id) 
    delete user.id

    let videogame = await Videogame.findByPk(idVideogame)
    let newVideoG = await videogame?.update({...user})

    if(idGenders.length > 0){
      let videoAddGender = await newVideoG?.setGenders(idGenders)
    }

    return newVideoG
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let deleteVideoGame_S = async(id: number)=>{
  try {
    let deleteVideo = await Videogame.findByPk(id)
    let result = await deleteVideo?.update({
      active: false
    })

    return result
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}



