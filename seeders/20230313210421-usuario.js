'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('pessoas', [
      {
       
      nome: 'John Doe',
      sobrenome:"Dir",
      idade:18,
      altura:180

     },
     {
       
      nome: 'John Doe',
      sobrenome:"Dir",
      idade:18,
      altura:180
     },
     {
      nome: 'John Doe',
      sobrenome:"Dir",
      idade:18,
      altura:180
     },
     {
       
      nome: 'John Doe',
      sobrenome:"Dir",
      idade:18,
      altura:180
    },
     {
       
      nome: 'John Doe',
      sobrenome:"Dir",
      idade:18,
      altura:180 
    },
     {
       
      nome: 'John Doe',
      sobrenome:"Dir",
      idade:18,
      altura:180 
    },
     {
       
      nome: 'John Doe',
      sobrenome:"Dir",
      idade:18,
      altura:180

     },
     {
       
      nome: 'John Doe',
      sobrenome:"Dir",
      idade:18,
      altura:180},

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
