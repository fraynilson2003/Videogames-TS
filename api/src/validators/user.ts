import { NextFunction, Request, Response } from "express"
import { check, param, query } from 'express-validator';
import { validateResult } from "../helpers/validateHelper"
import { arrUsers } from "../interfaces/User";

export let validateCreateUser = [
    check("name").exists().not(),
    check("lastname").optional().isString(),
    check("email").exists().isEmail(),
    check("sexo").optional().trim(),
    check("edad").optional().isInt(),

    check().custom((value, { req }) => {
        const unknownFields = Object.keys(req.body).filter(key => !arrUsers.includes(key));
        if (unknownFields.length > 0) {
          throw new Error(`Unknown fields: ${unknownFields.join(', ')}`);
        }
        return true;
      }),


    (req: Request, res: Response, next: NextFunction)=>{
        validateResult(req , res , next)
    }
]

export let validateFilterUsers = [
    query("page").optional().isInt(),
    query("page_size").optional().isInt(),
    query("orderABC").optional().isString(),
    query("name").optional().isString(),
  
    (req: Request, res: Response, next: NextFunction) => {
      validateResult(req, res, next)
    }
]


export let validateUpdateUser = [
    check("id").exists().isInt(),
    check("name").exists().not(),
    check("lastname").optional().isString(),
    check("sexo").optional().trim(),
    check("edad").optional().isInt(),

    check().custom((value, { req }) => {
        const unknownFields = Object.keys(req.body).filter(key => ![
            "id",
            "name",
            "lastname",
            "sexo",
            "edad",
        ].includes(key));
        if (unknownFields.length > 0) {
          throw new Error(`Unknown fields: ${unknownFields.join(', ')}`);
        }
        return true;
    }),


    (req: Request, res: Response, next: NextFunction)=>{
        validateResult(req , res , next)
    }
]

export let validateDeleteUser = [
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

/************************* */

export let validateAddFavoriteVideogame = [
    check("userId").exists().isInt(),
    check("videogameId").exists().isInt(),

    check().custom((value, { req }) => {
        const unknownFields = Object.keys(req.body).filter(key => ![
            "userId",
            "videogameId"
        ].includes(key));
        if (unknownFields.length > 0) {
          throw new Error(`Unknown fields: ${unknownFields.join(', ')}`);
        }
        return true;
      }),


    (req: Request, res: Response, next: NextFunction)=>{
        validateResult(req , res , next)
    }
]

export let validateGetFavoriteVideogames = [
    check("userId").exists().isInt(),

    check().custom((value, { req }) => {
        const unknownFields = Object.keys(req.body).filter(key => ![
            "userId"
        ].includes(key));
        if (unknownFields.length > 0) {
          throw new Error(`Unknown fields: ${unknownFields.join(', ')}`);
        }
        return true;
      }),


    (req: Request, res: Response, next: NextFunction)=>{
        validateResult(req , res , next)
    }
]

export let validateGetIdVideo = [
    param("userId").exists().isInt(),

    (req: Request, res: Response, next: NextFunction)=>{
        validateResult(req , res , next)
    }
]




