import { Propertys } from './SequelizeProp';
import { QuerysFilter } from './QuerysFilter';
import { GenderInterface } from './Gender';
import GenderModel from '../models/Gender';

export interface VideogameInterface {
    active?:  boolean
    id?: number
    name?: string | Object
    description?: string
    price?: number
    released?: string
    background_image?: string
    id_background_image?: string
    gender?: number
    genders?: number[]
    genres?: GenderInterface[], //solo para la extraccion de la api grande

    //stripe
    stripeProductId?: string,
    sripePriceId?: string,
    stripeSesionId?: string,
}

export interface img {
		image?: {
			name?: string,
			data?: {
				type?: string,
				data?: any
			},
			size?: number,
			encoding?: string,
			tempFilePath?: string,
			truncated?: boolean,
			mimetype?: string,
			md5?: string
		}
}


export enum VideogameEnum {
    active = "active",
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    released = "released",
    background_image = "background_image",
    id_background_image = "id_background_image",
    gender = "gender",
    genders = "genders",

    limitGenderDetail = "1",
    stripeProductId = "stripeProductId",
    sripePriceId = "sripePriceId",
    stripeSesionId = "stripeSesionId",
}

export let arrVideogame: string[] = [
    "active",
    "id",
    "name",
    "description",
    "price",
    "released",
    "background_image",
    "id_background_image",
    "gender",
    "genders",

    "stripeProductId",
    "sripePriceId",
    "stripeSesionId"
]

export interface VideogameQuery extends VideogameInterface, QuerysFilter {

}



