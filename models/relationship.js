'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.belongsToMany(models.User, { as: 'firstUser', through: Relationship, foreignKey: 'firstUserId' });
      models.User.belongsToMany(models.User, { as: 'secondUser', through:Relationship, foreignKey: 'secondUserId' });
    }
  }
  Relationship.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    firstUserId:{
      type:DataTypes.INTEGER ,
      references:{
        table:'users' ,
        key:'id'
      }
    },
    secondUserId:{
      type:DataTypes.INTEGER ,
      references:{
        table:'users' ,
        key:'id'
      }
    },
    state: {
      type: DataTypes.STRING,
      validate:{
        isIn:[ ['friends' , 'blocked','pending','recived','removed']]
      }
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
    },
  }, {
    sequelize,
    modelName: 'Relationship',
  });
  return Relationship;
};