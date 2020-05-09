'use strict';

const faker = require('faker'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 20;


    while (amount--){
      data.push({
         content: faker.lorem.text(),
         votes: faker.random.number(),
         author_name: faker.name.findName(),
         author_email: faker.internet.email(),
         createdAt: new Date(),
         updatedAt: new Date()
      });
    }
     
    return queryInterface.bulkInsert("Comments", data, );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};