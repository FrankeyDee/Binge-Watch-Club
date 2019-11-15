const passport = require('passport');
const router = require("express").Router();
const authController = require('../../controllers/authController');

router.route('/')
    .delete(authController.logout);

// Matches with '/api/auth/register'
router.route('/register')
    .post(authController.register);

// Matches with '/api/auth/login'
router.route('/login')
    .post((req, res, next) => { console.info('MADE IT'); next(); }, passport.authenticate('local'), (req, res) => { res.sendStatus(200); });

router.route('/session')
    .get((req, res) => {
        if (req.user) {
            console.info('user', req.user);
            res.json(req.user);
        } else {
            res.sendStatus(401);
        }
    })

module.exports = router;