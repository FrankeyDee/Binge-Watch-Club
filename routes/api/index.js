const router = require("express").Router();
const showRoutes = require("./shows");

//Show Routes

router.use("/shows", showRoutes);

module.exports = router;