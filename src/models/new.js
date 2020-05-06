'use strict';
module.exports = (sequelize, DataTypes) => {
  const New = sequelize.define('New', {
    title: DataTypes.TEXT,
    publish_date: DataTypes.DATEONLY,
    content_title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    votes: DataTypes.INTEGER
  }, {});
  New.associate = function(models) {

    New.hasMany(models.Image, {
      foreignKey: 'imageable_id',
      constraints: false,
      scope: {
        imageable_type: 'new'
      }
    });

    New.hasMany(models.Comment, 
      {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable_type: 'new'
      }
    });

  };
  return New;
};