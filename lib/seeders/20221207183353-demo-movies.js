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
    await db.Movies.bulkCreate([
      {
        title: 'Hereditary',
        description: 'A young boy finds out about his twisted past',
        image:
          'http://t3.gstatic.com/images?q=tbn:ANd9GcTxXv48mLwCRhsIyIYoX3e9pj1rCirnFVCw63eUPWIUHV65oTf5',
        releaseYear: 2018,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Mission Impossible',
        description: 'Series of American action spy films ',
        image: 'https://www.imdb.com/title/tt0117060/',
        releaseYear: 1996,
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Murder on the Orient Express',
        description: 'Murder on the Orient Express is a 2017 mystery film',
        image: 'https://www.imdb.com/title/tt3402236/',
        releaseYear: 2017,
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pineapple Express',
        description: '2 Stoners getting into trouble',
        image: 'https://www.sonypictures.com/movies/pineappleexpress',
        releaseYear: 2008,
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lady Bird',
        description: 'Coming of age film',
        image: 'https://www.imdb.com/title/tt4925292/',
        releaseYear: 2017,
        genre_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
