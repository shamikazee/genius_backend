'use strict';

const faker = require('faker'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 20;


    while (amount--){
      data.push({
         title: faker.name.title(), 
         publish_date: faker.date.future(),
         content_title: faker.lorem.text(),
         content: faker.lorem.text(),
         votes: faker.random.number(),
         createdAt: new Date(),
         updatedAt: new Date()
      });
    }
     
    return queryInterface.bulkInsert("News", data, );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("News", null, {});
  }
};