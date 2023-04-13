import axios from "axios"
import { CONSTANTS } from "./constant";



export const putUserAuth0 = (user)=>{
  return {
    type:CONSTANTS.SET_USER_AUTH0, 
    payload: user
  }
}

/************ FAVORITES ************ */
export const loginAuth0 = async(newUser)=>{
  try {
    let user = await axios.post("/user", newUser)
    console.log(user.data.user);

    return user.data.user
  } catch (error) {
    throw new Error("No se pudo iniciar sesion")
  }
}

export const addFavoriteVideogame = async(config)=>{
  console.log(config);

  try {
    let result = await axios.post("/user/videogames/favorite", {
      userId: config.userId,
      videogameId: config.videogameId
    })

    return result.data.message

  } catch (error) {
    throw new Error("Failed to add to favorites")
  }
}

//GET
export const getFavoritesVideogames = async(userId)=>{
  console.log(":::::   "+userId );
  try {
    let result = await axios.get("/user/videogames/favorites", {
      params: {
        userId: userId,
      }
    } )

    return {
      type: CONSTANTS.GET_ALL_FAVORITES,
      payload: result.data?.result
    }

  } catch (error) {
    console.log(JSON.stringify(error.response.data));
    throw new Error("No se pudo extraer favoritos")
  }
}


/***************  DELETE  ************* */
export const deleteFavoriteVideogame = async(config)=>{
  console.log(config);
  try {
    let result = await axios.delete("/user/videogames/favorite", {
      data: {
        userId: config.userId,
        videogameId: config.videogameId
      }
    })

    return result.data.message

  } catch (error) {
    console.log(error.message);
    throw new Error(error.message)
  }
}