'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    views: DataTypes.INTEGER,
    votes: DataTypes.INTEGER,
    about: DataTypes.TEXT
  }, {});
  Album.associate = function(models) {

    Album.belongsTo(models.Artist, {
      foreignKey: 'artist_id',
      onDelete: 'CASCADE',
    });

    Album.hasMany(models.Song, {
      foreignKey: 'album_id',
      as: 'songs',
    });

    Album.hasMany(models.Image, {
      foreignKey: 'imageable_id',
      constraints: false,
      scope: {
        imageable_type: 'album'
      }
    });

    Album.hasMany(models.Comment, {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable_type: 'album'
      }
    });

  };
  return Album;
};