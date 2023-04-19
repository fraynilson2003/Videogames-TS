import { GenderEnum, GenderInterface, GenderQuery } from '../interfaces/Gender';
import { Op, Sequelize } from 'sequelize';
import Gender from '../models/Gender';
import Videogame from '../models/Videogames';
import { orderDb } from '../interfaces/SequelizeProp';
import { VideogameEnum } from '../interfaces/Videogames';




export let getGenders_S = async(reqQuery: GenderQuery)=>{
  //paginacion
  let page: number =  Number(reqQuery.page)? Number(reqQuery.page) : 1
  let page_size: number =  Number(reqQuery.page_size)? Number(reqQuery.page_size) : 20
  const offset = (page - 1) * page_size;

  //filtros
  let queryName: GenderInterface = {}
  if(reqQuery.name){
    queryName[GenderEnum.name] = {[Op.iLike]:`%${reqQuery.name}%`}
  }
  
  //orden
  let orderName: any = []

  if(reqQuery.orderABC){
    orderName = [[GenderEnum.name, String(reqQuery.orderABC)]]
  }else{
    orderName = [[GenderEnum.name, orderDb.Asc]]
  }
 
  try {
    //genders
    let genders = await Gender.findAll({
      where: {...queryName},
      limit: page_size,
      offset: offset,
      order: [...orderName],
    })

    //count
    let totalGenders = await Gender.count({
      where: {...queryName}
    })

    return {
      totalGenders: totalGenders,
      genders: genders,
    }
    
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let getGenderById_S = async (idGender: number) => {
  try {
    let id: number = idGender

    let orderName: any = [[VideogameEnum.name, orderDb.Asc]]


    let genderDetail = await Gender.findOne({where: {id: id}})
    let gendersVideogames = await genderDetail?.getVideogames({
      limit: Number(VideogameEnum.limitGenderDetail),
      order: [...orderName],
    })

    //delete propertys
    gendersVideogames?.forEach(vid=>{
      delete vid.dataValues.VideogamesGender
    });

    return {
      ...genderDetail?.dataValues,
      Videogames: gendersVideogames 
    }
    
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let createGender = async(gender: GenderInterface)=>{
  
  try {
    let newGender = await Gender.create({...gender})
    
    return newGender
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

export let updateGender = async (gender: GenderInterface) => {
  try {
    let id: number = Number(gender.id)

    let genderModify = await Gender.findByPk(id)
    let newGender = await genderModify?.update({...gender})
    
    return newGender

  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}


export let deleteGenderS = async (gender: GenderInterface) => {
  try {
    let id: number = Number(gender.id)

    let genderModify = await Gender.findByPk(id)
    let newGender = await genderModify?.update({ active: false })

    return newGender
    
  } catch (error) {
    let {message}: any = error
    console.log(message);
    throw new Error(message)
  }
}

