'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
    email: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    followers: DataTypes.INTEGER
  }, {});
  Artist.associate = function(models) {

    Artist.hasMany(models.Album, {
      foreignKey: 'artist_id',
      as: 'albums',
    });

    Artist.hasMany(models.Image, {
      foreignKey: 'imageable_id',
      constraints: false,
      scope: {
        imageable_type: 'artist'
      }
    });

    Artist.hasMany(models.Comment, {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable_type: 'artist'
      }
    });

  };
  return Artist;
};