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
  

class Gender extends Model  {

  public active?: boolean
  public id?: number
  public name?: string
  public description?: string
  public image_background?: string

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
    Videogames: Association<Gender, Videogame>
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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "even without description"
      },
      image_background: {
        type: DataTypes.TEXT,
        allowNull: false
      },
    }, {
      sequelize: sequelize,
      modelName: 'Gender',
      tableName: 'Genders',
      timestamps: false
    })
  }

}

export default Gender
