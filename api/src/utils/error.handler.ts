import { Response } from "express";

export const handleHttp = (res: Response, error: string)=>{
    res.status(400).send({error})

}