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
         pcontent_title: faker.name.title(),
         content: faker.lorem.text(),
         votes: faker.random.number(),
         views: faker.random.number(),
         createdAt: new Date(),
         updatedAt: new Date()
      })
    }
     
    return queryInterface.bulkInsert("Videos", data, );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Videos", null, {});
  }
};