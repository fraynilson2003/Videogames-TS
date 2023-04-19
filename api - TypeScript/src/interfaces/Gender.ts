import { Sequelize } from 'sequelize';
import { QuerysFilter } from './QuerysFilter';
import { Propertys } from './SequelizeProp';


export interface GenderInterface {
    active?: boolean | Object
    id?: number | Object
    name?: string | Object
    description?: string | Object
    image_background?: string | Object
}

export enum GenderEnum {
    active = "active",
    id = "id",
    name = "name",
    description = "description",
    image_background = "image_background"
}

export let arrGender: string[] = [
    "active",
    "id",
    "name",
    "description",
    "image_background"
]

export interface GenderQuery extends GenderInterface, QuerysFilter {

}



