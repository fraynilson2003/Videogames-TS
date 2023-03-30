import { DataTypes, Model, Sequelize } from 'sequelize'
import Gender from '../Gender'
import Videogame from '../Videogames'


class VideogamesGender extends Model {
  public id!: number
  public videogameId!: Videogame
  public genderId!: Gender
  public kiko!: number


  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      videogameId: DataTypes.INTEGER,
      genderId: DataTypes.INTEGER,
      kiko: {
        type: DataTypes.INTEGER,
      },

    }, {
      sequelize: sequelize,
      modelName: 'VideogamesGender',
      tableName: 'VideogamesGenders',
      timestamps: false
    })
  }



}

export default VideogamesGender


// Class.belongsToMany(Student, { through: ClassStudent })
// Student.belongsToMany(Class, { through: ClassStudent })



// import ClassStudent from './class_student'

// let models = [ Class, Student, Teacher, ClassStudent ]
// models.forEach(model => model.initialize(sequelize))
// models.forEach(model => model.associate(models))



