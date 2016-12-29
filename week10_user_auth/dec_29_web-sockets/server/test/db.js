require('dotenv').load({ path: __dirname + '/.env.test' });
const connection = require( '../lib/setup-mongoose' );

module.exports = {
    drop() {
        return () => {
            return new Promise((resolve, reject) => {
                const drop = () => connection.db.dropDatabase((err, val) => {
                    err ? reject(err) : resolve(val);
                });
                if (connection.readyState === 1) drop();
                else connection.on('open', drop);
            });
        };
    },
    createUser(request) {
        return request
            .post('/api/auth/signup')
            .send({ 
                username: 'user',
                password: 'abc'
            })
            .then(res => res.body.token);
    }
};