const db = require("../models");


// Defining methods for the showController
module.exports = {
  findAll: function(req, res) {
    db.User.findById(req.user._id).then(user => {
      res.json(user.shows);
    }).catch(err => res.status(500).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.user._id).then(user => {
      res.json(user.shows.id(req.params.id));
    }).catch(err => res.status(500).json(err));
  },
  create: function(req, res) {
    db.User.findById(req.user._id).then(user => {
      user.shows.push(req.body);
      user.save(() => {
        res.json(req.body);
      });
    }).catch(err => res.status(500).json(err));
  },

  remove: function(req, res) {
    db.User.findById(req.user._id).then(user => {
      user.shows.pull(req.params.id);
      user.save(() => {
        res.sendStatus(200);
      }); 
    }).catch(err => res.status(500).json(err));
  }
};

