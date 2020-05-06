'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.TEXT,
    pcontent_title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    votes: DataTypes.INTEGER,
    views: DataTypes.INTEGER
  }, {});
  Video.associate = function(models) {

    Video.hasMany(models.Image, {
      foreignKey: 'imageable_id',
      constraints: false,
      scope: {
        imageable_type: 'video'
      }
    });

    Video.hasMany(models.Comment, 
      {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable_type: 'video'
      }
    });
  };
  return Video;
};