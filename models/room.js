'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User)
    }
  }
  Room.init({
    nameRoom: DataTypes.STRING,
    playerOneName: DataTypes.STRING,
    playerOneChoose: DataTypes.STRING,
    playerOneScore: DataTypes.INTEGER,
    playerOneWinner: DataTypes.STRING,
    playerTwoName: DataTypes.STRING,
    playerTwoChoose: DataTypes.STRING,
    playerTwoScore: DataTypes.INTEGER,
    playerTwoWinner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};