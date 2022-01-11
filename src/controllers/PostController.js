'use strict';

const Post = require('../models/PostModel');

exports.findAll = function(req, res) {
    Post.findAll(function(err, post) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', post);
      res.send(post);
    });
    };

 
exports.create = function(req, res) {
        const newPost = new Post(req.body);
        //handles null error
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(400).send({ error:true, message: 'Please provide all required field' });
        }else{
        Post.create(newPost, function(err, post) {
          if (err)
          res.send(err);
          res.json({error:false,message:"post added successfully!",data:post});
        });
        }
        };    

 exports.findById = function(req, res) {
            Post.findById(req.params.id, function(err, post) {
              if (err)
              res.send(err);
              res.json(post);
            });
            };
            

exports.update = function(req, res) {
                if(req.body.constructor === Object && Object.keys(req.body).length === 0){
                  res.status(400).send({ error:true, message: 'Please provide all required field' });
                }else{
                  Post.update(req.params.id, new Post(req.body), function(err, post) {
                 if (err)
                 res.send(err);
                 res.json({ error:false, message: 'post successfully updated' });
              });
              }
              };

exports.delete = function(req, res) {
                Post.delete( req.params.id, function(err, post) {
                  if (err)
                  res.send(err);
                  res.json({ error:false, message: 'post successfully deleted' });
                });
                };              
    
