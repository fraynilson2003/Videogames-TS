import { order } from "../../components/constants/order";
import { CONSTANTS } from "../actions/constant";


const initialState = {
  user: "",
  allGenders: [],
  allVideogames: {
    status: "",
    page: 1,
    totalPages: 0,
    TotalCount: 0,
    result: []
  },

  configFilterVideogames: {
    page: 1,
    page_size: 15,
    orderABC: order.asc,
    name: "",
    gender: 0
  }
}
  
  export const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
      // GET
      case CONSTANTS.GET_ALL_GENERS:
        return{
          ...state,
          allGenders: action.payload
        }
      
      case CONSTANTS.GET_ALL_VIDEOGAMES:
        return {
          ...state,
          allVideogames: action.payload
        }

      case CONSTANTS.FILTERS:
        return {
          ...state,
          configFilterVideogames: action.payload
        }

      //DELETE CLEAN
      case CONSTANTS.CLEAN_VIDEOGAMES:
        return {
          ...state,
          allVideogames: {
            ...state.allVideogames,
            result: action.payload
          }
        }

      default:
        return {
          ...state,

        }
    }
  }