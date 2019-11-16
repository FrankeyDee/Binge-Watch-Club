const bcrypt = require('bcrypt');
const db = require('../models-test-auth/');

module.exports = {
    register: (req, res) => {
        bcrypt.genSalt()
            .then(salt => {
                bcrypt.hash(req.body.password, salt)
                    .then(hash => {
                        db.User
                            .create({
                                username: req.body.username,
                                hash
                            })
                            .then(newUser => {
                                res.json(newUser);
                            })
                            .catch(err => {
                                console.error(err);
                                if (err.code === 11000) {
                                    res.status(400).json({ error: "Username already exist" });
                                    return;
                                }
                                res.status(500).json({ error: err.message })
                            });
                    })
                    .catch(err => res.status(500).json({ error: err.message }));
            })
            .catch(err => res.status(500).json({ error: err.message }));
    },
    logout: (req, res) => {
        req.logout();
        res.sendStatus(200);
    }
};