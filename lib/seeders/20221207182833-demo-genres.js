'use strict';
const db = require('../models/index.js');

module.exports = {
  async up() {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await db.Genre.bulkCreate([
      { name: 'Horror', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Action', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mystery', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Comedy', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Drama', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
