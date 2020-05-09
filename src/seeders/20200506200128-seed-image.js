'use strict';

const faker = require('faker'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 20;


    while (amount--){
      data.push({
         url: faker.image.imageUrl(), 

         createdAt: new Date(),
         updatedAt: new Date()
      });
    }
     
    return queryInterface.bulkInsert("Images", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  }
};