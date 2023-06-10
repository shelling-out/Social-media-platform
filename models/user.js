'use strict';
const {
  Model
} = require('sequelize');
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
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        min:8
      }
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    picturePath: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING,
      validate:{
        isIn:[ ['male' , 'female']]
      }
    },
    birthday: {
      type: DataTypes.DATE
    },
    country: {
      type: DataTypes.STRING
    },
    socket_io_id: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW 
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    }
  
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};