const connection = require('./lib/mongo-connect');
const Restaurant = require('./lib/models/restaurant');

// .get('/api/restaurants/top', (req, res, next) => {
    Restaurant.aggregate([
        { $unwind: '$grades' },
        { $match: { 'grades.grade': { $not: { $eq: 'Not Yet Graded' } } } }, 
        { $group: { 
            '_id':          '$_id',
            'ny-name':      { $first: '$name' },
            'avg':          { $avg: '$grades.score' },
            'min':          { $min: '$grades.score' },
            'max':          { $max: '$grades.score' },
            'count':        { $sum: 1 }
        } 
        },
        { $sort: { avg: -1 }},
        { $limit: 10 }
    ])
        .then(console.log)
        .catch(console.error);
        // .then(restaurants => res.send(restaurants))
        // .catch(next);

// })

// .get('/api/restaurants/:id', (req, res, next) => {

// })