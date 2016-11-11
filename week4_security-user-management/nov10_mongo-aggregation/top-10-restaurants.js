db.restaurants.aggregate([
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