'use strict';
const models = require('../models');
const faker = require('faker'); 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let amount = 10;
    let tables = ['song','single'];
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
       
        data.push({
          content: faker.lorem.text(), 
          lyricable_id: row_id,
          lyricable_type :table,
          createdAt: new Date(),
          updatedAt: new Date()
       });
      
      });
    }));

    return queryInterface.bulkInsert("Lyrics", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lyrics", null, {});
  }
};