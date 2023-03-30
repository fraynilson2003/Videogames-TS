import { NextFunction, Request, Response } from "express"
import { query, check, param } from 'express-validator';
import { validateResult } from "../helpers/validateHelper"
import { checkSchema } from 'express-validator';
import { arrGender } from '../interfaces/Gender';


export let validateFilterGender = [
  query("id").optional().isNumeric(),
  query("name").optional().isString(),
  query("description").optional().isString(),
  query("image_background").optional().isString(),


  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]

export let validateGetGenderId = [
  param("genderId").exists().isNumeric().isInt(),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]

export let validateCreateGender = [
  check("name").exists().not().isEmpty(),
  check("description").exists().not().isEmpty(),
  check("image_background").exists().not().isEmpty(),


  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]


export let updateGenre = [
  check("id").exists().isNumeric().not().isEmpty(),
  check("active").optional().isBoolean().not().isEmpty(),
  check("name").optional().exists().not().isEmpty(),
  check("description").optional().exists().not().isEmpty(),
  check("image_background").optional().exists().not().isEmpty(),

  // Agregamos un objeto de validación adicional para manejar campos desconocidos
  check().custom((value, { req }) => {
    const unknownFields = Object.keys(req.body).filter(key => !arrGender.includes(key));
    if (unknownFields.length > 0) {
      throw new Error(`Unknown fields: ${unknownFields.join(', ')}`);
    }
    return true;
  }),

  (req: Request, res: Response, next: NextFunction) => {

    validateResult(req, res, next)
  }
]


export let deleteGenre = [
  check("id").exists().isNumeric().not().isEmpty(),

  // Agregamos un objeto de validación adicional para manejar campos desconocidos
  check().custom((value, { req }) => {
    const unknownFields = Object.keys(req.body).filter(key => !["id"].includes(key));
    if (unknownFields.length > 0) {
      throw new Error(`Unknown fields: ${unknownFields.join(', ')}`);
    }
    return true;
  }),

  (req: Request, res: Response, next: NextFunction) => {

    validateResult(req, res, next)
  }
]











