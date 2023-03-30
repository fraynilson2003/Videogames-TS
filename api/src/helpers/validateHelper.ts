import { Request, Response, NextFunction } from 'express';
import { validationResult } from "express-validator";

export let validateResult = (req: Request, res: Response, next: NextFunction)=>{
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        return res.status(400).send(error)
    }
}






