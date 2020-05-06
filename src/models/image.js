'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    url: DataTypes.TEXT,
    imageable_id: DataTypes.INTEGER,
    imageable_type: DataTypes.STRING
  }, {});
  Image.associate = function(models) {

    Image.belongsTo(models.Song, 
      { 
        foreignKey: 'imageable_id', 
        constraints: false,
        as: 'song'
      });

    Image.belongsTo(models.Single, 
      { 
        foreignKey: 'imageable_id', 
        constraints: false,
        as: 'single'
      });

    Image.belongsTo(models.Album, 
      { 
        foreignKey: 'imageable_id', 
        constraints: false,
        as: 'album'
      });

    Image.belongsTo(models.Artist, 
      { 
        foreignKey: 'imageable_id', 
        constraints: false,
        as: 'artist'
      });

    Image.belongsTo(models.New, 
      { 
        foreignKey: 'imageable_id', 
        constraints: false,
        as: 'new'
      });

  };
  return Image;
};