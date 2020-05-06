'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lyric = sequelize.define('Lyric', {
    content: DataTypes.TEXT,
    lyricable_id: DataTypes.INTEGER,
    lyricable_type: DataTypes.STRING,
  }, {});
  Lyric.associate = function(models) {

    Lyric.belongsTo(models.Song, 
      { 
        foreignKey: 'lyricable_id', 
        constraints: false,
        as: 'song'
      });

    Lyric.belongsTo(models.Single, 
      { 
        foreignKey: 'lyricable_id', 
        constraints: false,
        as: 'single'
      });

    Lyric.hasMany(models.Comment, 
      {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable_type: 'lyric'
      }
    });

  };
  return Lyric;
};