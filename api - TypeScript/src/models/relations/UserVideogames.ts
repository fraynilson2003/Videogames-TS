import { DataTypes, Model, Sequelize } from 'sequelize'
import Videogame from '../Videogames'
import User from '../User'


class UserVideogames extends Model {
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
      modelName: 'UserVideogame',
      tableName: 'UserVideogames',
      timestamps: false
    })
  }



}

export default UserVideogames

