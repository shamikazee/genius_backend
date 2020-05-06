'use strict';

const faker = require('faker'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 20;


    while (amount--){
      data.push({
         ip: faker.internet.ip(),
         title: faker.name.title(),
         views: faker.random.number(), 
         about: faker.lorem.paragraph(),
         votes: faker.random.number(),
         createdAt: new Date(),
         updatedAt: new Date()
      })
    }
     
    return queryInterface.bulkInsert("Songs", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  }
};