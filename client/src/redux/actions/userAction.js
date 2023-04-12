import axios from "axios"
import { CONSTANTS } from "./constant";



export const putUserAuth0 = (user)=>{
  return {
    type:CONSTANTS.SET_USER_AUTH0, 
    payload: user
  }
}