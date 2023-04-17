import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handler';
import { GenderInterface, GenderQuery } from '../interfaces/Gender';
import { 
  getGenders_S, 
  createGender, 
  updateGender, 
  deleteGenderS, 
  getGenderById_S 
} from '../handlers/gender';
import { trimObject } from '../helpers/trimProperties';

export const getGenders = async(req: Request, res: Response)=>{
  try {
    
    let querys: GenderQuery = req.query

    //limpiamos
    trimObject(querys)

    let result = await getGenders_S(querys)

    return res.status(202).json({
      status: "sucess",
      ...result
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}

export const getGendersId = async(req: Request, res: Response)=>{
  try {
    
    let genderId: number = Number(req.params.genderId)

    let result = await getGenderById_S(genderId)

    return res.status(202).json({
      status: "sucess",
      result: result
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}

export const postGender = async(req: Request, res: Response)=>{
  
  try {
    let newGender: GenderInterface = req.body

    //limpiamos
    trimObject(newGender)

    let gender = await createGender(newGender)
    
    return res.status(202).json({
      status: "sucess",
      gender: gender
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}

export const putGender = async(req: Request, res: Response)=>{
  try {
    let newGender: GenderInterface = req.body

    //limpiamos
    trimObject(newGender)

    let gender = await updateGender(newGender)
    
    return res.status(202).json({
      status: "sucess",
      gender: gender
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}


export const deleteGender = async(req: Request, res: Response)=>{
  try {
    let deleteGender: GenderInterface = req.body

    //limpiamos
    trimObject(deleteGender)

    let gender = await deleteGenderS(deleteGender)
    
    return res.status(202).json({
      status: "sucess",
      gender: gender
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}





