import axios from "axios"
import { CONSTANTS } from "./constant";
import { genders } from "../../components/assets/sinC";



/**************** GET  ***********************/
export const getAllVideogames = (config)=>async(dispatch)=>{
  let result
  try {
    if(config){
      let querys = {}
      if(config.page) querys.page = config.page
      if(config.page_size) querys.page_size = config.page_size
      if(config.orderABC) querys.orderABC = config.orderABC
      if(config.name && config.name !== "") querys.name = config.name
      if(config.gender && config.name !== 0) querys.gender = config.gender

      result = await axios.get(`/videogame`, {
        params: querys
      })

    }else{
      result = await axios.get(`/videogame`)
    }



    return dispatch ({type:CONSTANTS.GET_ALL_VIDEOGAMES, payload: result.data})
    //return dispatch ({type:CONSTANTS.GET_ALL_VIDEOGAMES, payload: videogames})

  } catch (error) {
    let msg = (error.message? error.message : "Error en action getAllGenders")
    alert(msg)
    throw new Error(msg)
  }
}

export const getAllGenders = ()=>async(dispatch)=>{
  try {
    //let result = await axios.get(`/gender`)
    
    //return dispatch ({type:CONSTANTS.GET_ALL_GENERS, payload: result.data.genders})
    return dispatch ({type:CONSTANTS.GET_ALL_GENERS, payload: genders})

  } catch (error) {
    let msg = (error.message? error.message : "Error en action getAllGenders")
    alert(msg)
    throw new Error(msg)
  }
}

