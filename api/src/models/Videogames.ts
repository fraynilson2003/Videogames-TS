import {
  Association, DataTypes, Model, Sequelize,
  BelongsToCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyCountAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyHasAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManySetAssociationsMixin
} from 'sequelize'

import Gender from './Gender';
import User from './User';

class Videogame extends Model {

  public active?: boolean
  public id?: number
  public name?: string
  public description?: string
  public released?: string
  public background_image?: string
  public gender?: string
  //stripe
  public price?: number
  public stripeProductId?: string
  public sripePriceId?: string
  public stripeSesionId?: string

  // Genders association methods
  public addGender!: BelongsToManyAddAssociationMixin<Gender, number>
  public addGenders!: BelongsToManyAddAssociationsMixin<Gender, number>
  public countGenders!: BelongsToManyCountAssociationsMixin
  public createGender!: BelongsToManyCreateAssociationMixin<Gender>

  public getGenders!: BelongsToManyGetAssociationsMixin<Gender>

  public hasGender!: BelongsToManyHasAssociationMixin<Gender, number>
  public hasGenders!: BelongsToManyHasAssociationsMixin<Gender, number>

  public removeGender!: BelongsToManyRemoveAssociationMixin<Gender, number>
  public removeGenders!: BelongsToManyRemoveAssociationsMixin<Gender, number>

  public setGenders!: BelongsToManySetAssociationsMixin<Gender, number>

  // Populated for inclusions
  public readonly Genders?: Gender[]

  // Users purchased association methods
  public addBuyer!: BelongsToManyAddAssociationMixin<User, number>
  public addBuyers!: BelongsToManyAddAssociationsMixin<User, number>
  public countBuyer!: BelongsToManyCountAssociationsMixin
  public createBuyer!: BelongsToManyCreateAssociationMixin<User>

  public getBuyers!: BelongsToManyGetAssociationsMixin<User>
  public removeBuyer!: BelongsToManyRemoveAssociationMixin<User, number>
  public removeBuyers!: BelongsToManyRemoveAssociationsMixin<User, number>

  public setBuyers!: BelongsToManySetAssociationsMixin<User, number>

  // Populated for inclusions
  public readonly Buyers?: User[]

  // Users favorite association methods
  public addUser!: BelongsToManyAddAssociationMixin<User, number>
  public addUsers!: BelongsToManyAddAssociationsMixin<User, number>
  public countUser!: BelongsToManyCountAssociationsMixin
  public createUser!: BelongsToManyCreateAssociationMixin<User>

  public getUsers!: BelongsToManyGetAssociationsMixin<User>

  public hasUser!: BelongsToManyHasAssociationMixin<User, number>
  public hasUsers!: BelongsToManyHasAssociationsMixin<User, number>

  public removeUser!: BelongsToManyRemoveAssociationMixin<User, number>
  public removeUsers!: BelongsToManyRemoveAssociationsMixin<User, number>

  public setUsers!: BelongsToManySetAssociationsMixin<User, number>
  
  // Populated for inclusions
  public readonly Users?: User[]

  //Association
  public static associations: {
    Genders: Association<Gender, Videogame>
    Users: Association<User, Videogame>
    Buyers: Association<User, Videogame>
  }

  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
          type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      background_image: {
          type: DataTypes.TEXT,
          defaultValue: "none"
      },

      id_background_image: {
        type: DataTypes.TEXT,
        defaultValue: "none"
      },
      released: {
          type: DataTypes.DATEONLY,
          defaultValue: Sequelize.fn('date', Sequelize.fn('now')),
          allowNull: false
      },

      //stripe
      stripeProductId:{
        type: DataTypes.TEXT
      },
      sripePriceId: {
        type: DataTypes.TEXT
      },
      stripeSesionId:{
        type: DataTypes.TEXT
      },
    }, {
      sequelize: sequelize,
      modelName: 'Videogame',
      tableName: 'Videogames',
      timestamps: false
    })
  }

}

export default Videogame


