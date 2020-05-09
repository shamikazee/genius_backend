'use strict';
const faker = require('faker'); 
module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 10;


    while (amount--){
      data.push({
         name: faker.name.findName(),
         about: faker.lorem.paragraph(),
         email: faker.internet.email(), 
         votes: faker.random.number(),
         followers: faker.random.number(),
         createdAt: new Date(),
         updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert("Artists", data,{} );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Artists", null, {});
  }
};