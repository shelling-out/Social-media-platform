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
      Relationship.belongsTo(models.User, { foreignKey: 'firstUserId' });
      Relationship.belongsTo(models.User, { foreignKey: 'secondUserId' });
    }
  }
  Relationship.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
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