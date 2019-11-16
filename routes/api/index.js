const fetch = require("node-fetch");
const router = require("express").Router();
// const showRoutes = require("./shows");
const authRoutes = require("./auth");

//Show Routes
router.use("/auth", authRoutes);

router.route('/show/search')
    .post((req, res) => {
        fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${req.body.query}&type=series&plot=short`)
            .then(r => r.json())
            .then(r => res.json(r))
            .catch(err => res.status(500).json({ error: err }))
    })
// router.use("/shows", showRoutes);

module.exports = router;