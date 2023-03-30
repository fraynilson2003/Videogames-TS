import { Request, Response, Router } from "express";
import * as genderController from '../controllers/gender';
import * as V from '../validators/genders';

const router = Router()

/**Get */
router.get("/", [...V.validateFilterGender], genderController.getGenders )
router.get("/:genderId", [...V.validateGetGenderId], genderController.getGendersId)

/**Post */
router.post("/", [...V.validateCreateGender], genderController.postGender)

/**Put */
router.put("/", [...V.updateGenre], genderController.putGender)

/**Delete */
router.delete("/", [...V.deleteGenre], genderController.deleteGender)

export { router }


