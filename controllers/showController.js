const db = require("../models-test-auth");


// Defining methods for the showController
module.exports = {
  findAll: function(req, res) {
    db.Show
      .find(req.query)
      .sort({ date: -1 })
      .then(dbShow => res.json(dbShow))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Show
      .findById(req.params.id)
      .then(dbShow => res.json(dbShow))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Show
      .create(req.body)
      .then(dbShow => res.json(dbShow))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Show
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbShow => res.json(dbShow))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Show
      .findById({ _id: req.params.id })
      .then(dbShow => dbShow.remove())
      .then(dbShow => res.json(dbShow))
      .catch(err => res.status(422).json(err));
  }
};
