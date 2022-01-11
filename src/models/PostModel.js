'use strict';

var dbConn = require('./../../config/db.config');

var Post = function(post){
    this.post_title = post.post_title;
    this.post_desc = post.post_desc;
    this.post_img = post.post_img;
    this.like_count = post.like_count;
    this.dislike_count = post.dislike_count;
  };

  Post.create = function (newPost, result) {
    dbConn.query("INSERT INTO posts set ?", newPost, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
    });
    }; 

    Post.findById = function (id, result) {
        dbConn.query("Select * from posts where post_id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
        });
        };

    Post.findAll = function (result) {
            dbConn.query("Select * from posts", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('posts : ', res);
              result(null, res);
            }
            });
            };  
    Post.update = function(id,post,result){
                dbConn.query("UPDATE posts SET like_count=?,dislike_count=? WHERE post_id = ?", [post.like_count,post.dislike_count, id], function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }else{
                  result(null, res);
                }
                });
                };         
      
    Post.delete = function(id, result){
                    dbConn.query("DELETE FROM posts WHERE post_id = ?", [id], function (err, res) {
                    if(err) {
                      console.log("error: ", err);
                      result(null, err);
                    }
                    else{
                      result(null, res);
                    }
                    });
                    };

    module.exports= Post;           