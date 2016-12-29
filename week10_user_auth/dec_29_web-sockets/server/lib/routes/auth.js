const router = require('express').Router();
const jsonParser = require('body-parser').json();
const User = require('../models/user');
const token = require('../auth/token');
const ensureAuth = require('../auth/ensure-auth')();
const oauth = require('./oauth');

router.post('/signup', jsonParser, (req, res, next) => {
    const { username, password } = req.body;
    delete req.body.password;
    
    if (!password || !username) {
        return next({
            code: 400,
            message: 'username and password are required'
        });
    }
    
    User.findOne({ username })
        .then(existing => {
            if (existing) {
                return next({
                    code: 400,
                    message: `username "${username}" already exists`
                });
            }
            
            const user = new User(req.body);
            user.generateHash(password);
            return user.save()
                .then(user => token.sign(user ))
                .then(token => res.json({ token }));
                
        })
        .catch(err => {
            res.status(500).json({
                msg: 'didn\'t work',
                reason: err
            });
        });
});

router.post('/signin', jsonParser, (req, res) => {
    const { username, password } = req.body;
    delete req.body;
    
    User.findOne({ username })
        .then(user => {
            
            if (!user) {
                return res.status(400).json({
                    msg: 'authentication sez no!',
                    reason: 'no user ' + username
                });
            }
            
            if (!user.compareHash(password )) {
                return res.status(400).json({
                    msg: 'authentication sez no!',
                    reason: 'password doesn\'t match!'
                });
            }
            
            token.sign(user).then(token => res.json({ token }));
        })
        .catch(err => {
            res.status(500).json({
                msg: 'didn\'t work',
                reason: err
            });
        });
    
});

router.get('/verify', ensureAuth, (req, res) => {
    res.status(200).send({ success: true });
});

router.use(oauth);

module.exports = router;