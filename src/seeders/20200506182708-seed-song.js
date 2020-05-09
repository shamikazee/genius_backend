'use strict';
const Album = require('../models').Album;
const Genre = require('../models').Genre;
const faker = require('faker'); 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];

    const genres = await Genre.findAll();
    let genre_array_json = JSON.stringify(genres)
    const genre_array = JSON.parse(genre_array_json);
    const genre_ids = genre_array.map((genre) => {
      return genre.id;
    })

    const albums = await Album.findAll();
    let album_array_json = JSON.stringify(albums)
    const album_array = JSON.parse(album_array_json);
    const album_ids = album_array.map((album) => {
      return album.id;
    })
    album_ids.forEach(album_id => {
      let amount = 12;
      while (amount--){
        data.push({
            title: faker.name.title(),
            views: faker.random.number(), 
            about: faker.lorem.paragraph(),
            votes: faker.random.number(),
            genre_id: genre_ids[Math.floor(Math.random() * genre_ids.length)],
            album_id: album_id,
            createdAt: new Date(),
            updatedAt: new Date()
        });
      }
    });

    return queryInterface.bulkInsert("Songs", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  }
};