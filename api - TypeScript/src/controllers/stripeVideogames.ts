import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handler';
import { trimObject } from "../helpers/trimProperties";
import Videogame from '../models/Videogames';
import { createSession } from "../services/stripe";

interface SesionStripe {
  idUser: any,
  idVideogame: string
}
export const createSesionStripe = async (req: Request, res: Response) => {

  try {
    let sesionStri: SesionStripe = req.body

    //limpiamos
    trimObject(sesionStri)
    
    let vid = await Videogame.findByPk(Number(sesionStri.idVideogame))
    let sesionStripe = await createSession(String(vid?.sripePriceId), sesionStri.idVideogame, sesionStri.idUser)


    return res.status(202).json(sesionStripe)
  } catch (error) {
    let { message }: any = error
    handleHttp(res, message)
  }
}





