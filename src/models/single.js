'use strict';
module.exports = (sequelize, DataTypes) => {
  const Single = sequelize.define('Single', {
    title: DataTypes.STRING,
    views: DataTypes.INTEGER,
    about: DataTypes.TEXT,
    votes: DataTypes.INTEGER
  }, {});
  Single.associate = function(models) {

    Single.belongsTo(models.Artist, {
      foreignKey: 'artist_id',
      onDelete: 'CASCADE',
    });

    Single.belongsTo(models.Genre, {
      foreignKey: 'genre_id',
      onDelete: 'CASCADE',
    });

    Single.hasMany(models.Lyric, {
      foreignKey: 'lyricable_id',
      constraints: false,
      scope: {
        lyricable_type: 'single'
      }
    });

    Single.hasMany(models.Image, {
      foreignKey: 'imageable_id',
      constraints: false,
      scope: {
        imageable_type: 'single'
      }
    });

    Single.hasMany(models.Comment, 
      {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable_type: 'single'
      }
    });

  };
  return Single;
};