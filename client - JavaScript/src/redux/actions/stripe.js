import axios from "axios"


export const getSessionUrl = async(idUser, idVideogame)=>{
    try {
      let newSession = await axios.post("/user/stripe/session", {
        idUser: idUser,
        idVideogame: idVideogame
      })
  
      return newSession.data.url
    } catch (error) {
      throw new Error(error.message)
    }
  }