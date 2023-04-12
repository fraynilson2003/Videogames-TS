import axios from "axios"
import { CONSTANTS } from "./constant";



export const putUserAuth0 = (user)=>{
  return {
    type:CONSTANTS.SET_USER_AUTH0, 
    payload: user
  }
}

export const loginAuth0 = async(newUser)=>{
  try {
    let user = await axios.post("/user", newUser)
    console.log(user.data.user);

    return {
      type:CONSTANTS.SET_USER_AUTH0, 
      payload: user.data.user
    }
  } catch (error) {
    throw new Error("No se pudo iniciar sesion")
  }
}