import { order } from "../../components/constants/order";
import { CONSTANTS } from "../actions/constant";


const initialState = {
  countNotify: 0,

  userAuth0: {},
  allGenders: [],
  videogameId: {},
  allVideogames: {
    status: "",
    page: 1,
    totalPages: 0,
    TotalCount: 0,
    result: []
  },
  allFavorites: {},

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
      //LOGIN
      case CONSTANTS.SET_USER_AUTH0:
        return{
          ...state,
          userAuth0: action.payload
        }

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

      case CONSTANTS.GET_ALL_FAVORITES:
        return{
          ...state,
          allFavorites: action.payload
        }

      case CONSTANTS.FILTERS:
        return {
          ...state,
          configFilterVideogames: action.payload
        }

      case CONSTANTS.GET_ID_VIDEOGAME:
        return {
          ...state,
          videogameId: action.payload
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

      //PUT REDUX STATE CLIENT
      case CONSTANTS.ADD_REDUX_FAVORITE:
        return {
          ...state,
          allFavorites: {
            ...state.allFavorites,
            result: action.payload
          }
        }

      case CONSTANTS.PUT_NEW_NOTIFY:
        return {
          ...state,
          countNotify: action.payload
        }

      default:
        return {
          ...state
        }
    }
  }