const router = require("express").Router();
const showController = require("../../controllers/showController");
// const axios = require("axios");

// Matches with "/api/shows"
router.route("/")
  .get(showController.findAll)
  //this findAll means all shows for one unique person
  .post(showController.create);
//this create is to create a show to save to the database

// Matches with "/api/shows/:id"
router
  .route("/:id")
  .get(showController.findById)
  .delete(showController.remove);

module.exports = router;

