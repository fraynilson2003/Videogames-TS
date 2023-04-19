import { DataTypes, Model, Sequelize } from 'sequelize'
import Videogame from '../Videogames'
import User from '../User'


class UserPurchasedVideogame extends Model {
  public id!: number
  public videogameId!: Videogame
  public userId!: User


  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      videogameId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    }, {
      sequelize: sequelize,
      modelName: 'UserPurchasedVideogame',
      tableName: 'UserPurchasedVideogames',
      timestamps: false
    })
  }



}

export default UserPurchasedVideogame

