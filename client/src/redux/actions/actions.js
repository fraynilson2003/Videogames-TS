import axios from "axios"
import { CONSTANTS } from "./constant";
/**************** GET  ***********************/
export const getAllVideogames = ()=>async(dispatch)=>{
  try {
    let result = await axios.get(``)
  } catch (error) {
    
  }
}

/********** POST ******************** */
export const postRegisterVideogame = (statement)=>async(dispatch)=>{
  console.log("LLEGa");
  try {
    let newVidGame = {
      newVideoGame: {
        name: statement.name,
        description: statement.description,
        rating: statement.rating,
        released: statement.released,
        background_image: statement.background_image
        },
      idGener: statement.idGener,
      idPlatform: statement.idPlatform
    }
    console.log(/*/////////*/);
    console.log(newVidGame);

    let result = await axios.post("/videogames", newVidGame)

    if(result.status == 200){
      console.log(result.status);
      return dispatch ({type:SET_VIDEOGAME_RESULT,payload: true})
      
    }
    console.log(result.status);
  } catch (error) {
    console.log("ERROR "+error);
    return dispatch ({type:SET_VIDEOGAME_RESULT,payload: false})

  }

}