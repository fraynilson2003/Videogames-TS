import Gender from "../../models/Gender";
import Videogame from '../../models/Videogames';
import VideogamesGender from '../../models/relations/VideogamesGenders';

export let videogamesGenderRelation: Function = () => {
//Relations
Gender.belongsToMany(Videogame, {
  through: VideogamesGender,
  foreignKey: 'genderId',
  timestamps: false,
  as: {
    singular: 'Videogame',
    plural: 'Videogames'
  }

})
Videogame.belongsToMany(Gender, {
  through: VideogamesGender,
  foreignKey: 'videogameId',
  timestamps: false,
  as: {
    singular: 'Gender',
    plural: 'Genders'
  }
});

}





