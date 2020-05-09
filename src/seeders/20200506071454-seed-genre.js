'use strict';

const faker = require('faker'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 20;


    while (amount--){
      data.push({
         slug: faker.lorem.slug(),
         createdAt: new Date(),
         updatedAt: new Date()
      });
    }
     
    return queryInterface.bulkInsert("Genres", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Genres", null, {});
  }
};