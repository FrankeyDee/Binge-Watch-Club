const router = require("express").Router();

const authRoutes = require("./auth");

//Show Routes
router.use("/auth", authRoutes);


module.exports = router;