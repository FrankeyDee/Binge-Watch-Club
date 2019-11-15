const router = require("express").Router();
<<<<<<< Updated upstream

=======
// const showRoutes = require("./shows");
>>>>>>> Stashed changes
const authRoutes = require("./auth");

//Show Routes
router.use("/auth", authRoutes);
<<<<<<< Updated upstream

=======
// router.use("/shows", showRoutes);
>>>>>>> Stashed changes

module.exports = router;