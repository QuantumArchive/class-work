const express = require('express');
const app = express();
const path = require('path');
const store = require('bad-store');

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

// won't ever happen because index.html gets served by express.static
// app.get('/', (req, res) => {
//     res.send('hello world');
// });

app.set('view engine', 'pug');

app.get('/treasure', (req, res) => {
    res.render('treasure', { 
        title: 'treasure ftw!',
        message: 'find the map, find the treasure!'
    });
});

app.get('/pirates', (req, res) => {
    // request for /pirates
    // for this app, this means send back 
    // array of all pirate objects
    store.all()
        .then(pirates => res.send(pirates))
        .catch(err => console.log(err));
});

app.get('/pirates/:id', (req, res) => {
    store.get(req.params.id)
        .then(pirate => res.send(pirate))
        .catch(err => console.log(err));
});

app.delete('/pirates/:id', (req, res) => {
    store.remove(req.params.id)
        .then(result => res.send({ result: result}))
        .catch(err => console.log(err));
});

app.post('/pirates', (req, res) => {
    let body = '';
    req.on('data', data => body += data);
    req.on('end', () => {
        store.save(JSON.parse(body))
            .then(id => res.send({ id: id }))
            .catch(err => console.log(err))
    });
});

module.exports = app;