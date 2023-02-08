'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player: {
        type: Sequelize.STRING(10),
	allowNull: false,
	unique: true,
      },
      score: {
        type: Sequelize.INTEGER,
	allowNull: false,
      },
      createdAt: {
	type: Sequelize.DATE,
	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
	type: Sequelize.DATE,
	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Scores');
  }
};
