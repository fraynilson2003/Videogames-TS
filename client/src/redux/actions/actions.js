import axios from "axios"
import { CONSTANTS } from "./constant";
import { genders, videogames } from "../../components/assets/sinC";



/**************** GET  ***********************/
export const getAllVideogames = ()=>async(dispatch)=>{
  try {
    //let result = await axios.get(`/videogame`)

    //return dispatch ({type:CONSTANTS.GET_ALL_VIDEOGAMES, payload: result.data.result})
    return dispatch ({type:CONSTANTS.GET_ALL_VIDEOGAMES, payload: videogames})

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

