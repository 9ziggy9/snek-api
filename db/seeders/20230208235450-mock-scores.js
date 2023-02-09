'use strict';

/** @type {import('sequelize-cli').Migration} */

const randScores = () => [...Array(100)]
      .map(score => ({
	playerId: Math.floor(Math.random() * 20) + 1,
	score: Math.floor(Math.random() * 1250) + 15,
      }));


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Scores', randScores(), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Scores', null, {});
  }
};
