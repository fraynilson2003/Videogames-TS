import { Propertys } from './SequelizeProp';
import { QuerysFilter } from './QuerysFilter';
import { GenderInterface } from './Gender';
import GenderModel from '../models/Gender';

export interface VideogameInterface {
    active?:  boolean
    id?: number
    name?: string | Object
    description?: string
    released?: string
    background_image?: string
    gender?: number
    genders?: number[]
    genres?: GenderInterface[] //solo para la extraccion de la api grande

}

export enum VideogameEnum {
    active = "active",
    id = "id",
    name = "name",
    description = "description",
    released = "released",
    background_image = "background_image",
    gender = "gender",
    genders = "genders",

    limitGenderDetail = "1"
}

export let arrVideogame: string[] = [
    "active",
    "id",
    "name",
    "description",
    "released",
    "background_image",
    "gender",
    "genders"
]

export interface VideogameQuery extends VideogameInterface, QuerysFilter {

}



