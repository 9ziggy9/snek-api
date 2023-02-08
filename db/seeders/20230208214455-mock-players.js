'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Scores', [
      {player: "ABC", score: 120},
      {player: "BAC", score: 1225},
      {player: "ZIGGY", score: 2000},
      {player: "LOL", score: 2010},
      {player: "LEL", score: 15},
      {player: "FTW", score: 2015},
      {player: "ALECK", score: 850},
      {player: "SQL", score: 555},
      {player: "LIZE", score: 5555},
      {player: "TESTER", score: 1255},
      {player: "ORM", score: 950},
      {player: "FUN", score: 250},
      {player: "AYY", score: 777},
      {player: "LMAO", score: 7777},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Scores', null, {});
  }
};
