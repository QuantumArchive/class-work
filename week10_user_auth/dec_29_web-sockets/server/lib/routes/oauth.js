const router = require('express').Router();
const jsonParser = require('body-parser').json();
const User = require('../models/user');
const token = require('../auth/token');
const request = require('request');
const qs = require('qs');

const requestTokenUrl = 'https://api.twitter.com/oauth/request_token';
const accessTokenUrl = 'https://api.twitter.com/oauth/access_token';
const profileUrl = 'https://api.twitter.com/1.1/users/show.json?screen_name=';
const TWITTER_KEY = process.env.TWITTER_KEY;
const TWITTER_SECRET = process.env.TWITTER_SECRET;

router.post('/twitter', jsonParser, (req, res, next) => {

    // Part 1 of 2: Initial request from Satellizer.
    if (!req.body.oauth_token || !req.body.oauth_verifier) {

        const requestTokenOauth = {
            consumer_key: TWITTER_KEY,
            consumer_secret: TWITTER_SECRET,
            callback: req.body.redirectUri
        };

        // Step 1. Obtain request token for the authorization popup.
        request.post({ 
            url: requestTokenUrl, 
            oauth: requestTokenOauth 
        }, (err, response, body) => {
            if (err) return res.status(500).send(err);
            const oauthToken = qs.parse(body);
            // Step 2. Send OAuth token back to open the authorization screen.
            res.send(oauthToken);
        });
    } 
    // Part 2 of 2: Second request after Authorize app is clicked.
    else {
        
        const accessTokenOauth = {
            consumer_key: TWITTER_KEY,
            consumer_secret: TWITTER_SECRET,
            token: req.body.oauth_token,
            verifier: req.body.oauth_verifier
        };

        // Step 3. Exchange oauth token and oauth verifier for access token.
        request.post({ 
            url: accessTokenUrl, 
            oauth: accessTokenOauth 
        }, (err, response, accessToken) => {
            accessToken = qs.parse(accessToken);

            const profileOauth = {
                consumer_key: TWITTER_KEY,
                consumer_secret: TWITTER_SECRET,
                oauth_token: accessToken.oauth_token
            };

            // Step 4. Retrieve profile information about the current user.
            request.get({
                url: profileUrl + accessToken.screen_name,
                oauth: profileOauth,
                json: true
            }, (err, response, profile) => {
                // Step 5a. Link user accounts.
                // if (req.header('Authorization')) {
                // 	console.log('have auth header',  req.header('Authorization'));
                    // User.findOne({ twitter: profile.id })
                    // 	.then(existingUser => {
                    // 		// if (existingUser) {
                    // 		//   return res.status(409).send({ message: 'There is already a Twitter account that belongs to you' });
                    // 		// }

                    // 		const token = req.header('Authorization').split(' ')[1];
                    // 		const payload = jwt.decode(token, config.TOKEN_SECRET);

                    // 		User.findById(payload.sub, function(err, user) {
                    // 			if (!user) {
                    // 				return res.status(400).send({ message: 'User not found' });
                    // 			}

                    // 			user.twitter = profile.id;
                    // 			user.displayName = user.displayName || profile.name;
                    // 			user.picture = user.picture || profile.profile_image_url.replace('_normal', '');
                    // 			user.save(err => {
                    // 				res.send({ token: createJWT(user) });
                    // 			});
                    // 		});
                    // 	});
                // } else {
                    // Step 5b. Create a new user account or return an existing one.
                User.findOne({ twitter: profile.id })
                    .then(existingUser => {
                        if (existingUser) return existingUser;
                        console.log('twitter profile', profile);
                        return new User({
                            username: profile.screen_name,
                            twitter: profile.id,
                            twitterProfile: {
                                accessToken: accessToken,
                                displayName: profile.name,
                                picture: profile.profile_image_url.replace('_normal', '')
                            }
                        }).save();

                    })
                    .then(user => token.sign(user))
                    .then(token => res.send({ token }))
                    .catch(next);

                // }
            });
        });
    }
});

module.exports = router;