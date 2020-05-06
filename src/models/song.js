'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    views: DataTypes.INTEGER,
    about: DataTypes.TEXT,
    votes: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {

    Song.belongsTo(models.Album, {
      foreignKey: 'album_id',
      onDelete: 'CASCADE',
    });

    Song.belongsTo(models.Genre, {
      foreignKey: 'genre_id',
      onDelete: 'CASCADE',
    });

    Song.hasMany(models.Lyric, {
      foreignKey: 'lyricable_id',
      constraints: false,
      scope: {
        lyricable_type: 'song'
      }
    });

    Song.hasMany(models.Image, {
      foreignKey: 'imageable_id',
      constraints: false,
      scope: {
        imageable_type: 'song'
      }
    });

    Song.hasMany(models.Comment, 
      {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable_type: 'song'
      }
    });

  };
  return Song;
};