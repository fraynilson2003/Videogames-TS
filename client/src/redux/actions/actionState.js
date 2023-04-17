import { CONSTANTS } from "./constant";


/*************  UPDATE ********************* */
export const putReduxNotify = (newCount)=>{
  return {
    type: CONSTANTS.PUT_NEW_NOTIFY,
    payload: newCount
  }
}