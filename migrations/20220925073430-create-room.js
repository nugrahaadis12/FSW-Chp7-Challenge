'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameRoom: {
        type: Sequelize.STRING,
        unique: true
      },
      playerOneName: {
        type: Sequelize.STRING
      },
      playerOneChoose: {
        type: Sequelize.STRING
      },
      playerOneScore: {
        type: Sequelize.INTEGER
      },
      playerOneWinner: {
        type: Sequelize.STRING
      },
      playerTwoName: {
        type: Sequelize.STRING
      },
      playerTwoChoose: {
        type: Sequelize.STRING
      },
      playerTwoScore: {
        type: Sequelize.INTEGER
      },
      playerTwoWinner: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};