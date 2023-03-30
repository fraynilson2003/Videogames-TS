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
import Videogame from './Videogames';
  

class User extends Model  {

  public id!: number
  public active!: boolean
  public name!: string
  public lastname?: string
  public email!: string
  public imagePerfil?: string
  public sexo?: string
  public edad?: number
  public created_at!: Date

  // Videogames association methods
  public addVideogame!: BelongsToManyAddAssociationMixin<Videogame, number>
  public addVideogames!: BelongsToManyAddAssociationsMixin<Videogame, number>
  public countVideogames!: BelongsToManyCountAssociationsMixin
  public createVideogame!: BelongsToManyCreateAssociationMixin<Videogame>

  public getVideogames!: BelongsToManyGetAssociationsMixin<Videogame>

  public hasVideogame!: BelongsToManyHasAssociationMixin<Videogame, number>
  public hasVideogames!: BelongsToManyHasAssociationsMixin<Videogame, number>

  public removeVideogame!: BelongsToManyRemoveAssociationMixin<Videogame, number>
  public removeVideogames!: BelongsToManyRemoveAssociationsMixin<Videogame, number>

  public setVideogames!: BelongsToManySetAssociationsMixin<Videogame, number>

  // Populated for inclusions
  public readonly Videogames?: Videogame[]

  public static associations: {
    Videogames: Association<User, Videogame>
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
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      imagePerfil: {
        type: DataTypes.TEXT,
        defaultValue: "none"
      },
      sexo: {
        type: DataTypes.STRING(1),
        validate: {
            isIn: [["M", "F"]]
          }
      },
      edad: {
        type: DataTypes.INTEGER,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Date.now(),
        allowNull: false, 
      }
    }, {
      sequelize: sequelize,
      modelName: 'User',
      tableName: 'Users',
      timestamps: false
    })
  }

}

export default User
