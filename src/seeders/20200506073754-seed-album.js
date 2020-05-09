const Artist = require('../models').Artist;
const faker = require('faker'); 



module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
      const artists = await Artist.findAll();
      let artist_array_json = JSON.stringify(artists)
      const artist_array = JSON.parse(artist_array_json);
      const artist_ids = artist_array.map((artist) => {
        return artist.id;
      })
      artist_ids.forEach(artist_id => {
        let amount = 5;
        while (amount--){
        data.push({
          title: faker.name.title(),
          release_date: faker.date.past(),
          views: faker.random.number(), 
          votes: faker.random.number(),
          about: faker.lorem.paragraph(),
          artist_id: artist_id,
          createdAt: new Date(),
          updatedAt: new Date()
       });
      }
      });
    
     
    return queryInterface.bulkInsert("Albums", data, );
  },

       
    


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Albums", null, {});
  }
};