const db = require("../models");


// Defining methods for the showController
module.exports = {
  findAll: function(req, res) {
    db.User.find({ id: req.user._id }).then(user => {
      res.json(user.shows);
    }).catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.find({ id: req.user._id }).then(user => {
      res.json(user.shows.id(req.params.id));
    }).catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.find({ id: req.user._id }).then(user => {
      user.shows.push(req.body);
      user.save(() => {
        res.json(req.body);
      });
    }).catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Show
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbShow => res.json(dbShow))
  //     .catch(err => res.status(422).json(err));
  // }
  remove: function(req, res) {
    db.Show
      .findById({ _id: req.params.id })
      .then(dbShow => dbShow.remove())
      .then(dbShow => res.json(dbShow))
      .catch(err => res.status(422).json(err));
  }
};
