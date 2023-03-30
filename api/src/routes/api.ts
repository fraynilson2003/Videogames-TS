import { Router } from "express";
import { setVideogamesDB, setGenresDB } from '../controllers/apiSetDB';

const router = Router()

/**Post */
router.post("/videogames", setVideogamesDB)
router.post("/genders", setGenresDB)


export { router }


