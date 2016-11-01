const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Pirate = require('../models/pirate');

router
    .get('/', (req, res, next) => {
        Pirate.getAll()
            .then(pirates => res.send(pirates ))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Pirate.get(req.params.id)
            .then(pirate => res.send(pirate ))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Pirate.delete(req.params.id)
            .then(deleted => res.send(deleted ))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        Pirate.add(req.body)
            .then(saved => res.send(saved ))
            .catch(next);
    })

    .put('/:id', bodyParser, (req, res, next) => {
        Pirate.update(req.params.id, req.body)
            .then(saved => res.send(saved ))
            .catch(next);
    });

module.exports = router;