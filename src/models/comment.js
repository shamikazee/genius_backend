'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    commentable_id: DataTypes.INTEGER,
    commentable_type: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    author_name: DataTypes.STRING,
    author_email: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
   
    Comment.belongsTo(models.Song, 
      { 
        foreignKey: 'commentable_id', 
        constraints: false,
        as: 'song'
      });

    Comment.belongsTo(models.Single, 
      { 
        foreignKey: 'commentable_id', 
        constraints: false,
        as: 'single'
      });

    Comment.belongsTo(models.Album, 
      { 
        foreignKey: 'commentable_id', 
        constraints: false,
        as: 'album'
      });

    Comment.belongsTo(models.Artist, 
      { 
        foreignKey: 'commentable_id', 
        constraints: false,
        as: 'artist'
      });

    Comment.belongsTo(models.New, 
      { 
        foreignKey: 'commentable_id', 
        constraints: false,
        as: 'new'
      });

    Comment.belongsTo(models.Lyric, 
      { 
        foreignKey: 'commentable_id', 
        constraints: false,
        as: 'lyric'
      });

  };
  return Comment;
};