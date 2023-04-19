import { CONSTANTS } from "./constant";

export const setConfigFilter = (newConfig) => {
  console.log("llega a set");
  return {
    type: CONSTANTS.FILTERS,
    payload: newConfig,
  };
};


export const cleanVideogames = ()=>{
  return {
    type: CONSTANTS.CLEAN_VIDEOGAMES,
    payload: []
  }
}
