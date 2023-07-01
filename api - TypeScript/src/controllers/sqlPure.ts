import { Request, Response } from "express"
import { conn } from "../connection/db";
import { handleHttp } from '../utils/error.handler';
import { VideogameInterface, VideogameQuery, img } from '../interfaces/Videogames';
import {
} from '../handlers/videogames';
import { trimObject } from "../helpers/trimProperties";
import { Sequelize, QueryTypes } from 'sequelize';
import Videogame from '../models/Videogames';
import { GenderInterface } from "../interfaces/Gender";



export const getVideoGamesSQL2 = async (req: Request, res: Response) => {
    try {

        let querys = req.query as VideogameQuery

        const query = `
        SELECT 
            vi.id,
            vi.name,
            vi.price
        FROM 
            "Videogames" as vi
        WHERE vi.price > 10
        LIMIT 2
    `

        let result: VideogameInterface[] = await conn.query(query, {
            type: QueryTypes.SELECT,
            // model: Videogame,
            // mapToModel: true // pass true here if you have any mapped fields
        });


        let resultGender = await Promise.all(result.map(async (ele: VideogameInterface) => {

            // sin optimizar

            // const queryRela = `
            //     SELECT 
            //         (SELECT id FROM "Genders" as ge WHERE ge.id = vige."genderId") as id,
            //         (SELECT active FROM "Genders" as ge WHERE ge.id = vige."genderId") as active,
            //         (SELECT name FROM "Genders" as ge WHERE ge.id = vige."genderId") as name,
            //         (SELECT description FROM "Genders" as ge WHERE ge.id = vige."genderId") as description,
            //         (SELECT image_background FROM "Genders" as ge WHERE ge.id = vige."genderId") as image_background

            //     FROM "VideogamesGenders" as vige
            //     WHERE vige."videogameId" = ${ele.id}
            // `

            const query22 = `
            SELECT 
                ge.id,
                ge.active,
                ge.name,
                ge.description,
                ge.image_background
            FROM 
                "VideogamesGenders" as vige
            JOIN 
                "Genders" as ge ON ge.id = vige."genderId"
            WHERE 
                vige."videogameId" = ${ele.id}
        `

            let resVidGen: GenderInterface[] = await conn.query(query22, {
                type: QueryTypes.SELECT,
            });
            ele.genres = resVidGen
            return ele
        }))


        console.log("------------- RESULT ----------------");
        console.log(resultGender);
        console.log("------------- FIN ----------------");

        return res.status(202).json({
            status: "sucess SQL",
            result: resultGender
        })
    } catch (error) {
        let { message }: any = error
        handleHttp(res, message)
    }
}

//FUNCIONA
export const getVideoGamesSQL = async (req: Request, res: Response) => {
    try {
        let querys = req.query as VideogameQuery;

        //   const query = `
        //     SELECT 
        //       vi.id,
        //       vi.name,
        //       vi.price,
        //       ARRAY_AGG(ge.id) AS genre_ids
        //     FROM 
        //       "Videogames" AS vi
        //     LEFT JOIN 
        //       "VideogamesGenders" AS vige ON vi.id = vige."videogameId"
        //     LEFT JOIN 
        //       "Genders" AS ge ON vige."genderId" = ge.id
        //     WHERE 
        //       vi.price > 10
        //     GROUP BY 
        //       vi.id, vi.name, vi.price
        //     LIMIT 2;
        //   `;

        // const query = `
        //     SELECT 
        //         vi.id,
        //         vi.name,
        //         vi.price,
        //         ARRAY_AGG(ge_sub) AS genres,
        //         ARRAY_AGG(ge.id) AS genre_ids
        //     FROM 
        //         "Videogames" AS vi
        //     LEFT JOIN 
        //         "VideogamesGenders" AS vige ON vi.id = vige."videogameId"
        //     LEFT JOIN 
        //         "Genders" AS ge ON vige."genderId" = ge.id
        //     LEFT JOIN 
        //         "Genders" AS ge_sub ON ge_sub.id = ge.id
        //     WHERE 
        //         vi.price > 10
        //     GROUP BY 
        //         vi.id, vi.name, vi.price
        //     LIMIT 2;



        // `;


        // let queryDef = `
        // SELECT 

        // JSON_BUILD_OBJECT(
        //     'id', vi.id,
        //     'active', vi.active,
        //     'name', vi.name,
        //     'price', vi.price,
        //     'background_image', vi.background_image,
        //     'id_background_image', vi.id_background_image,
        //     'released', vi.released,
        //     'stripeProductId', vi."stripeProductId",
        //     'sripePriceId', vi.stripePriceId,
        //     'stripeSesionId', vi.stripeSesionId,
        //     'genders', JSON_AGG(
        //         JSON_BUILD_OBJECT(
        //             'id', ge.id,
        //             'active', ge.active,
        //             'name', ge.name,
        //             'description', ge.description,
        //             'image_background', ge.image_background
        //             )
        //         )
        //     ) AS result
        // FROM 
        //     "Videogames" AS vi
        // LEFT JOIN 
        //     "VideogamesGenders" AS vige ON vi.id = vige."videogameId"
        // LEFT JOIN 
        //     "Genders" AS ge ON vige."genderId" = ge.id
        // WHERE 
        //     vi.price > 10
        // GROUP BY 
        //     vi.id, 
        //     vi.active, 
        //     vi.name, 
        //     vi.price, 
        //     vi.background_image, 
        //     vi.id_background_image, 
        //     vi.released, 
        //     vi."stripeProductId", 
        //     vi."stripePriceId", 
        //     vi."stripeSesionId"
        // LIMIT 2;

        // `

        let queryDef = `
            SELECT 
                vi.id,
                vi.active,
                vi.name,
                vi.price,
                vi.background_image,
                vi.id_background_image,
                vi.released,
                vi."stripeProductId",
                vi."sripePriceId",
                vi."stripeSesionId",
                ARRAY_AGG(
                    JSON_BUILD_OBJECT(
                        'id', ge.id,
                        'active', ge.active,
                        'name', ge.name,
                        'description', ge.description,
                        'image_background', ge.image_background
                        )
                    ) AS "Genders"
            FROM 
                "Videogames" AS vi
            LEFT JOIN 
                "VideogamesGenders" AS vige ON vi.id = vige."videogameId"
            LEFT JOIN 
                "Genders" AS ge ON vige."genderId" = ge.id
            WHERE 
                vi.price > 10
            GROUP BY 
                vi.id

            ORDER BY vi.name ASC
            

            LIMIT 20

    `



        let result: VideogameInterface[] = await conn.query(queryDef, {
            type: QueryTypes.SELECT,
        });

        console.log("------------- RESULT ----------------");
        console.log(result);
        console.log("------------- FIN ----------------");

        return res.status(202).json({
            status: "success SQL",
            result: result
        });
    } catch (error) {
        let { message }: any = error;
        handleHttp(res, message);
    }
};



export const getVideoGamesSQL4 = async (req: Request, res: Response) => {
    try {

        let pruebaSQL = `
    SELECT JSON_BUILD_OBJECT('videogameId', vi."name", 'genderId',ge."name") 
    from "VideogamesGenders" as vige
    INNER JOIN "Genders" as ge
    ON vige."genderId" = ge.id
    INNER JOIN "Videogames" as vi
    ON vige."videogameId" = vi.id
    `

        let result = await conn.query(pruebaSQL, {
            type: QueryTypes.SELECT,
            // model: Videogame,
            // mapToModel: true // pass true here if you have any mapped fields
        });




        console.log("------------- RESULT ----------------");
        console.log(result);
        console.log("------------- FIN ----------------");

        return res.status(202).json({
            status: "sucess SQL",
            result: result
        })
    } catch (error) {
        let { message }: any = error
        handleHttp(res, message)
    }
}

//FUNCIONA
export const getUserVideogamesSQL = async (req: Request, res: Response) => {
    try {
        let querys = req.query as VideogameQuery;


        let queryDef = `
            SELECT
                u.id,
                u.active,
                u.name,
                ARRAY_AGG(
                    JSON_BUILD_OBJECT(
                        'id', vi.id,
                        'active', vi.active,
                        'name', vi.name
                    )
                ) AS "Videogames"
            FROM 
                "Users" AS u
            LEFT JOIN 
                "UserVideogames" AS usvi ON usvi."userId" = u.id
            LEFT JOIN 
                "Videogames" AS vi ON vi.id = usvi."videogameId"

            GROUP BY 
                u.id

            ORDER BY u.name ASC
            
    `



        let result = await conn.query(queryDef, {
            type: QueryTypes.SELECT,
        });

        console.log("------------- RESULT ----------------");
        console.log(result);
        console.log("------------- FIN ----------------");

        return res.status(202).json({
            status: "success SQL",
            result: result
        });
    } catch (error) {
        let { message }: any = error;
        handleHttp(res, message);
    }
};

