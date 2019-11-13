const router = require("express").Router();
const showRoutes = require("./shows");
const authRoutes = require("./auth");

//Show Routes
router.use("/auth", authRoutes);
router.use("/shows", showRoutes);

module.exports = router;