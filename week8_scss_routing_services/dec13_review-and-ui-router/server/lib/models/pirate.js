const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        default: 'crew'
    },
    profile: {
        type: String
    },
    crew: {
        type: Schema.Types.ObjectId,
        ref: 'Crew'
    }
});

module.exports = mongoose.model('Pirate', schema);
