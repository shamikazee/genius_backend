'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    slug: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {

    Genre.hasMany(models.Song, {
      foreignKey: 'genre_id',
      as: 'songs',
    });

    Genre.hasMany(models.Single, {
      foreignKey: 'genre_id',
      as: 'singles',
    });

  };
  return Genre;
};