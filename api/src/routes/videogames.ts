import { Request, Response, Router } from "express";
import * as videogameController from '../controllers/videogames';
import * as V from '../validators/videogames';

const router = Router()
/**Get */
router.get("/", [...V.validateFilterVideogame], videogameController.getVideoGames)
router.get("/:idVideogame", [...V.validateGetVideogameId], videogameController.getVideoGameId)

/**Post */
router.post("/", [...V.validateCreaterVideogame], videogameController.postVideogame)

/**Put */
router.put("/", [...V.validateUpdateVideogame], videogameController.putVideogame)

/**Delete */
router.delete("/", [...V.validateDeleteVideogame], videogameController.deleteVideogame)


export { router }


