const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{ 
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        isEmail:true,
      }
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          min:8
        }
    },
    picturePath: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING ,
    gender: {
      type:DataTypes.STRING,
      validate:{
        isIn:[['male' , 'female']]
      }
    },
    birthday:DataTypes.DATE ,
    country:DataTypes.STRING,
    registerationTime:{
      type:DataTypes.STRING,
      defaultValue:DataTypes.NOW
    },
    socket_io_id:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};