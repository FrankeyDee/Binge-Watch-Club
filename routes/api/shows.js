const router = require("express").Router();
const showController = require("../../controllers/showController");


// Matches with "/api/shows"
router.route("/")
  .get(showController.findAll)
  //this findAll means all shows for one unique person
  .post(showController.create);
//this create is to create a show to save to the database

// We want the app to save shows to a database, and be able to delete them after watching.  Do we need a .put?

// Matches with "/api/shows/:id"
router
  .route("/:id")
  .get(showController.findById)
  .put(showController.update)
  .delete(showController.remove);

module.exports = router;

