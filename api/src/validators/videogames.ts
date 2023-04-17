import { NextFunction, Request, Response } from "express"
import { query, check, param } from 'express-validator';
import { validateResult } from "../helpers/validateHelper"
import { checkSchema } from 'express-validator';
import { arrVideogame } from "../interfaces/Videogames";


export let validateFilterVideogame = [
  query("page").optional().isNumeric(),
  query("page_size").optional().isNumeric(),
  query("orderABC").optional().isString(),
  query("orderFecha").optional().isEmpty(),
  query("orderRating").optional().isEmpty(),

  query("name").optional().isString(),
  query("released").optional().isDate(),


  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]

export let validateGetVideogameId = [
  param("idVideogame").exists().isNumeric().isInt(),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]

export let validateCreaterVideogame = [
  check("id").optional().isNumeric(),
  check("name").optional().isString(),
  check("description").optional().isString(),
  check("price").optional().isNumeric(),
  check("released").optional().isDate(),
  check("genders").optional().isArray(),
  // Agregamos un objeto de validación adicional para manejar campos desconocidos
  check().custom((value, { req }) => {
    const unknownFields = Object.keys(req.body).filter(key => !arrVideogame.includes(key));
    if (unknownFields.length > 0) {
      throw new Error(`Unknown fields: ${unknownFields.join(', ')}`);
    }
    return true;
  }),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]

export let validateDeleteVideogame = [
  check("id").exists().isNumeric(),

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

export let validateUpdateVideogame = [
  check("id").isNumeric(),
  check("name").optional().isString(),
  check("description").optional().isString(),
  check("released").optional().isDate(),
  check("background_image").optional().isString(),
  check("genders").optional().isArray(),
  // Agregamos un objeto de validación adicional para manejar campos desconocidos
  check().custom((value, { req }) => {
    const unknownFields = Object.keys(req.body).filter(key => !arrVideogame.includes(key));
    if (unknownFields.length > 0) {
      throw new Error(`Unknown fields: ${unknownFields.join(', ')}`);
    }
    return true;
  }),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]













