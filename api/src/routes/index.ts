import { Router } from "express";
import { router as rUser } from "./user";
import { router as rGender } from "./gender";
import { router as rVideogame } from "./videogames";
import { router as rApi } from "./api";


const router = Router()

router.use("/user", rUser)
router.use("/gender", rGender)
router.use("/videogame", rVideogame)
router.use("/api", rApi)

export { router }

