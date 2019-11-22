const fetch = require("node-fetch");
const router = require("express").Router();
const showRoutes = require("./shows");
const authRoutes = require("./auth");
const authController = require("../../controllers/authController");

//Show Routes
// router.use("/shows", showsRoutes);
router.use("/auth", authRoutes);

router.route('/show/search/:id')
    .get((req, res) => {
        // fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${req.body.query}&type=series&plot=short`)
        //     .then(r => r.json())
        //     .then(r => res.json(r))
        //     .catch(err => res.status(500).json({ error: err }))
        // fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${encodeURIComponent(req.body.query)}`, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        //         "x-rapidapi-key": process.env.RAPID_API_IMDB_API_KEY
        //     }
        // })
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=${req.params.id}`)

            .then(r => r.json())
            .then(r => res.json(r))
            .catch(err => res.status(500).json({ error: err }))
    })
router.use("/shows", authController.isLoggedIn, showRoutes);

module.exports = router;