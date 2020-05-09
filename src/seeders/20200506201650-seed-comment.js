'use strict';

const faker = require('faker'); 
const models = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let tables = ['song','single','album','artist','new','lyric'];
    await Promise.all(tables.map(async (table) => {
      const modelName = table.charAt(0).toUpperCase() + table.slice(1)
      let model = models[modelName];
      const rows = await model.findAll();
      let rows_array_json = JSON.stringify(rows)
      const rows_array = JSON.parse(rows_array_json);
      const row_ids = rows_array.map((row) => {
        return row.id;
      })
      row_ids.forEach(row_id => {
       let amount = 5;
        while (amount--){
          data.push({
             content: faker.lorem.text(),
             votes: faker.random.number(),
             author_name: faker.name.findName(),
             author_email: faker.internet.email(),
             commentable_id: row_id,
             commentable_type: table,
             createdAt: new Date(),
             updatedAt: new Date()
          });
        }
      });
    }));

   
     
    return queryInterface.bulkInsert("Comments", data, );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};