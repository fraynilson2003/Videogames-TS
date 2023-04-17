import { Router } from "express";
import * as userController from '../controllers/user';
import * as V from '../validators/user';

const router = Router()

/**Get */
router.get("/", [...V.validateFilterUsers], userController.getUsers)
router.get("/detail/:userId", [...V.validateGetIdVideo], userController.getUserId)
router.get("/videogames/favorites", [...V.validateGetFavoriteVideogames], userController.getAllVideoggamesFavorite)



/**Post */
router.post("/", [...V.validateCreateUser], userController.postUser)
router.post("/videogames/favorite", [...V.validateAddFavoriteVideogame], userController.addFavoriteVideogame)


/**Put */
router.put("/", [...V.validateUpdateUser], userController.putUser)

/**Delete */
router.delete("/", [...V.validateDeleteUser], userController.deleteUser)
router.delete("/videogames/favorite", [...V.validateAddFavoriteVideogame], userController.removeFavoriteVideogame)


export { router }


