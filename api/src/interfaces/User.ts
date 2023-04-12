import { Propertys } from './SequelizeProp';
import { QuerysFilter } from './QuerysFilter';


export interface UserInterface {
    active?: boolean | Object
    id?: number | Object
    name?: string | Object
    lastname?: string| Object
    email?: string | Object
    imagePerfil?: string | Object
    sexo?: string | Object
    edad?: number | Object
    created_at?: Date | Object
}

export enum UserEnum {
    active = "active",
    id = "id",
    name = "name",
    lastname = "lastname",
    email = "email",
    sexo = "backgrsexoound_image",
    edad = "edad",
    created_at = "created_at",
}

export let arrUsers: string[] = [
    "active",
    "id",
    "name",
    "lastname",
    "email",
    "sexo",
    "edad",
    "created_at",
    "imagePerfil"
]

export interface UserQuery extends UserInterface, QuerysFilter {

}


