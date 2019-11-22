const fetch = require("node-fetch");
const router = require("express").Router();
const showRoutes = require("./shows");
const authRoutes = require("./auth");
const authController = require("../../controllers/authController");

router.use("/auth", authRoutes);

router.route('/show/search/:id')
    .get((req, res) => {
     
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=${req.params.id}`)

            .then(r => r.json())
            .then(r => res.json(r))
            .catch(err => res.status(500).json({ error: err }))
    })
router.use("/shows", authController.isLoggedIn, showRoutes);

module.exports = router;