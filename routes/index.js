const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
<<<<<<< Updated upstream


//API Routes
router.use("/api", apiRoutes);

=======

//API Routes
router.use("/api", apiRoutes);
>>>>>>> Stashed changes

module.exports = router;