import Videogame from '../../models/Videogames';
import User from '../../models/User';
import UserVideogames from '../../models/relations/UserVideogames';

export let userVideogameRelation: Function = () => {
//Relations
User.belongsToMany(Videogame, {
  through: UserVideogames,
  foreignKey: 'userId',
  timestamps: false,
  as: {
    singular: 'Videogame',
    plural: 'Videogames'
  }
})

Videogame.belongsToMany(User, {
  through: UserVideogames,
  foreignKey: 'videogameId',
  timestamps: false,
  as: {
    singular: 'User',
    plural: 'Users'
  }
});

}





