'use strict';
const Artist = require('../models').Artist;
const Genre = require('../models').Genre;
const faker = require('faker'); 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let amount = 10;
    const genres = await Genre.findAll();
    let genre_array_json = JSON.stringify(genres)
    const genre_array = JSON.parse(genre_array_json);
    const genre_ids = genre_array.map((genre) => {
      return genre.id;
    })

    const artists = await Artist.findAll();
    let artist_array_json = JSON.stringify(artists)
    const artist_array = JSON.parse(artist_array_json);
    const artist_ids = artist_array.map((artist) => {
      return artist.id;
    })
    artist_ids.forEach(artist_id => {
      let amount = 10;
      while (amount--){
        data.push({
            title: faker.name.title(),
            views: faker.random.number(), 
            about: faker.lorem.paragraph(),
            votes: faker.random.number(), 
            genre_id: genre_ids[Math.floor(Math.random() * genre_ids.length)],
            artist_id: artist_id,
            createdAt: new Date(),
            updatedAt: new Date()
        });
      }
    });
     
    return queryInterface.bulkInsert("Singles", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Singles", null, {});
  }
};