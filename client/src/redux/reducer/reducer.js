import { CONSTANTS } from "../actions/constant";


const initialState = {
  user: "",
  allGenders: []
}
  
  export const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
      // GET
      case CONSTANTS.GET_ALL_GENERS:
        return{
          ...state,
          allGenders: action.payload
        }

      case CONSTANTS.LOGIN:
        return{
          ...state,
          user: action.payload
        }

      default:
        return {
          ...state
        }
    }
  }