const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Pirate = require('../models/pirate');

router
    .get('/', (req, res, next) => {
        const query = {};
        if(req.query.rank) query.rank = req.query.rank;

        Pirate.find(query)
            .select('name rank')
            .lean()
            .populate({
                path: 'crewId',
                select: 'name'
            })
            .lean()
            .then(pirates => res.send(pirates ))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Pirate.findById(req.params.id)
            .select('name rank')
            .lean()
            .then(pirate => res.send(pirate ))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Pirate.findByIdAndRemove(req.params.id)
            .then(deleted => res.send(deleted ))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        new Pirate(req.body).save()
            .then(saved => res.send(saved ))
            .catch(next);
    })

    .put('/:id', bodyParser, (req, res, next) => {
        Pirate.findByIdAndUpdate(req.params.id, req.body)
            .then(saved => res.send(saved))
            .catch(next);
    });

module.exports = router;