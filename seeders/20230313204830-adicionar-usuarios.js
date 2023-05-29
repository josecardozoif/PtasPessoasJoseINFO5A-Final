'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [
      {
       nome: 'John Does'
     },
     {
      nome: 'John Doesn'
    },  
    {
      nome: 'John yes'
    },
      {
      nome: 'John yes or not'
    },
      {
      nome: 'John TRUE'
    }
    
    
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
