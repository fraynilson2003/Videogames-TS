import { Router } from "express";
import * as Cont from '../controllers/stripeVideogames';

const router = Router()

/**Get */
router.post("/stripe/session", Cont.createSesionStripe)



export { router }