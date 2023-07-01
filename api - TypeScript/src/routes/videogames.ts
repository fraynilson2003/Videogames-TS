import { Request, Response, Router } from "express";
import * as videogameController from '../controllers/videogames';
import * as V from '../validators/videogames';
import { getUserVideogamesSQL, getVideoGamesSQL } from "../controllers/sqlPure";

const router = Router()
/**Get */
router.get("/", [...V.validateFilterVideogame], videogameController.getVideoGames)
router.get("/:idVideogame", [...V.validateGetVideogameId], videogameController.getVideoGameId)
router.get("/prueba/sql", getVideoGamesSQL)
router.get("/prueba/userSQL", getUserVideogamesSQL)


/**Post */
router.post("/", [...V.validateCreaterVideogame], videogameController.postVideogame)
router.post("/img", videogameController.putVideogameImg)
    
/**Put */
router.put("/", [...V.validateUpdateVideogame], videogameController.putVideogame)

/**Delete */
router.delete("/", [...V.validateDeleteVideogame], videogameController.deleteVideogame)


export { router }


