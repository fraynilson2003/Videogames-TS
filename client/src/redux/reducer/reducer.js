import {
    GET_ALL_VIDEOGAMES,
    GET_ID_VIDEOGAME,
    GET_NAME_VIDEOGAME,
    PUT_STATE_SEARCH_NAME,
    SET_VIDEOGAME_RESULT,
    GET_ALL_GENERS,
    GET_ALL_PLATFORMS,
    PUT_STATE_REGISTER,
    ACTUALIZAR_ALL_VIDEOGAMES,
    POST_STATE_FORM,
    PUT_STATE_PAGINADO} from "./actions"
    
import {
    SET_FILTER_ORDER,
    SET_FILTER_ORIGIN,
    SET_FILTER_GENER,
    SET_FILTER_NAME} from "./actionsFilter"
  
  const initialState = {
    //estado para actualizar render videogames
    actualizarAllVideogames: "Random",

    //estados para guardar resultados de peticion
    allVideogames: [],
    videogameByID: {},
    searchVideogame:[],

    //estado para guardar get de generos y plataformas
    allGeners: [],
    allPlatforms: [],
    
    //estado para guardar stados de cual componente renderizar
    stateSearchName: false,
    //estador para renderizar componente REGISTER
    stateCompRegister: false,

    //estado para paginacion
    statePagination: 1,

    //estado para guardar si se creo o no un videojuego
    resultCreateVideogame: false,

    //estado para guardar detalles del filtro
    searchName: "",
    order: "a - z",
    FilterOrigin: "All",
    FilterGener: 0,

    //estado para check de formulario
    formStateRedux: {
      name: "",
      idGener: [],
      idPlatform: [],
      released: "",
      background_image: "",
      rating: "",
      description: ""
    }
  }
  
  export const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
      // GET
      case GET_NAME_VIDEOGAME:
        return{
          ...state,
          searchVideogame: action.payload
        }

      case GET_ALL_VIDEOGAMES:
        return{
          ...state,
          allVideogames: action.payload
        }

      case GET_ID_VIDEOGAME:
        return{
          ...state,
          videogameByID: action.payload
        }

      case GET_ALL_GENERS:
        return{
          ...state,
          allGeners: action.payload
        }

      case GET_ALL_PLATFORMS:
        return{
          ...state,
          allPlatforms: action.payload
        }

      //ESTADOS PARA RENDERIZAR
      case PUT_STATE_SEARCH_NAME:
        return{
          ...state,
          stateSearchName: action.payload

        }
      

      case PUT_STATE_PAGINADO:{
        return{
          ...state,
          statePagination: action.payload
        }
      }

      case PUT_STATE_REGISTER:
        return{
          ...state,
          stateCompRegister: action.payload
        }

      //actualizar allVideogames
      case ACTUALIZAR_ALL_VIDEOGAMES:
        return{
          ...state,
          actualizarAllVideogames: action.payload
        }

      //RESULTADO DE creacion videojuego
      case SET_VIDEOGAME_RESULT:
        return{
          ...state,
          resultCreateVideogame: action.payload
        }

     // FILTROS
      case SET_FILTER_NAME:
        return{
          ...state,
          searchName: action.payload
        }

      case SET_FILTER_ORDER:
        return{
          ...state,
          order: action.payload
        }

      case SET_FILTER_ORIGIN:
        return{
          ...state,
          FilterOrigin: action.payload
        }

      case SET_FILTER_GENER: {
        return{
          ...state,
          FilterGener: action.payload
        }       
      }

    //ESTADO PARA CHECK
    case POST_STATE_FORM:
      return{
        ...state,
        formStateRedux: action.payload
      }

      


      default:
        return {
          ...state
        }
    }
  }