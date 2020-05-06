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
         release_date: faker.date.past(),
         views: faker.random.number(), 
         votes: faker.random.number(),
         about: faker.lorem.paragraph(),
         createdAt: new Date(),
         updatedAt: new Date()
      })
    }
     
    return queryInterface.bulkInsert("Albums", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Albums", null, {});
  }
};