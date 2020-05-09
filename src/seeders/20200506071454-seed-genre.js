'use strict';

const faker = require('faker'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let genres = ['Rap','Pop','R&B','Rock','Country'];


    genres.forEach((genre) => {
      data.push({
        slug: genre,
        createdAt: new Date(),
        updatedAt: new Date()
     });
    })
      
     
    return queryInterface.bulkInsert("Genres", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Genres", null, {});
  }
};