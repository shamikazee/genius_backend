'use strict';
const models = require('../models');
const faker = require('faker'); 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let tables = ['song','single','album','artist','new'];
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
       let amount = table === "album" ? 5 : 1;
       while(amount--){
        data.push({
          url: faker.image.image()+"/"+Math.floor((Math.random() * 10) + 1), 
          imageable_id: row_id,
          imageable_type: table,
         createdAt: new Date(),
         updatedAt: new Date()
       });
       }
      });
    }));
    return queryInterface.bulkInsert("Images", data, );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  }
};