import axios from "axios"
import { CONSTANTS } from "./constant";
/**************** GET  ***********************/
export const getAllVideogames = ()=>async(dispatch)=>{
  try {
    let result = await axios.get(``)
  } catch (error) {
    
  }
}

export const getAllGenders = ()=>async(dispatch)=>{
  try {
    let result = await axios.get(`/gender`)

    console.log(result.data.genders);

    return dispatch ({type:CONSTANTS.GET_ALL_GENERS, payload: result.data.genders})
  } catch (error) {
    let msg = (error.message? error.message : "Error en action getAllGenders")
    alert(msg)
    throw new Error(msg)
  }
}

