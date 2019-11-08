const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const showRoutes = require("./api/shows");

//API Routes
router.use("/api", apiRoutes);
router.use('/shows', showRoutes);

module.exports = router;