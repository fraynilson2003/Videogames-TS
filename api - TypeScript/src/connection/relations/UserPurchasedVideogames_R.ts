import Videogame from '../../models/Videogames';
import User from '../../models/User';
import UserPurchasedVideogame from '../../models/relations/UserPurchasedVideogames';

export let UserPurchasedVidRelation: Function = () => {
//Relations
User.belongsToMany(Videogame, {
  through: UserPurchasedVideogame,
  foreignKey: 'userId',
  timestamps: false,
  as: {
    singular: 'Purchased',
    plural: 'Purchaseds'
  }
})

Videogame.belongsToMany(User, {
  through: UserPurchasedVideogame,
  foreignKey: 'videogameId',
  timestamps: false,
  as: {
    singular: 'Buyer',
    plural: 'Buyers'
  }
});

}





