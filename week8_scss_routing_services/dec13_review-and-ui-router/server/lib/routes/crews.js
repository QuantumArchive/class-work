const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Crew = require('../models/crew');

router
    .get('/', (req, res, next) => {
        Crew.find(req.query).lean()
            .then(crews => res.send(crews ))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Crew.findById(req.params.id).lean()
            .then(crew => res.send(crew))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Crew.findByIdAndRemove(req.params.id)
            .then(deleted => res.send(deleted))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        new Crew(req.body).save()
            .then(saved => res.send(saved))
            .catch(next);
    })

    .put('/:id', bodyParser, (req, res, next) => {
        Crew.findByIdAndUpdate(req.params.id, req.body)
            .then(saved => res.send(saved))
            .catch(next);
    });

module.exports = router;