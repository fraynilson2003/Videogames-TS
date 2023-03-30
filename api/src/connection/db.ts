import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// Importar los modelos
import Videogame from '../models/Videogames';
import VideogamesGender from '../models/relations/VideogamesGenders';
import Gender from '../models/Gender';
import User from '../models/User';
import { videogamesGenderRelation } from './relations/VideogamesGenders_R';
import UserVideogames from '../models/relations/UserVideogames';
import { userVideogameRelation } from './relations/UserVideoGames_R';


const {
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_HOST,
} = process.env;

// Configurar la conexión con la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  schema: "public"
});

// Asociar los modelos con la conexión
Gender.initialize(sequelize)
Videogame.initialize(sequelize)
User.initialize(sequelize)

VideogamesGender.initialize(sequelize)
UserVideogames.initialize(sequelize)
//Relations
videogamesGenderRelation()
userVideogameRelation()

console.log("***********************");
console.log(sequelize.models);







export { 
    sequelize as conn
};
