'use strict';

const faker = require('faker'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 20;


    while (amount--){
      data.push({
         content: faker.lorem.text(), 
         createdAt: new Date(),
         updatedAt: new Date()
      });
    }
     
    return queryInterface.bulkInsert("Lyrics", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lyrics", null, {});
  }
};