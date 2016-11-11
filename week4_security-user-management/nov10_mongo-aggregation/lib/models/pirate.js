const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const Weapon = require('./weapon');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        default: 'crew'
    },
    crewId: {
        type: Schema.Types.ObjectId,
        ref: 'Crew'   
    },
    weapons: [Weapon.schema]
});


module.exports = mongoose.model('Pirate', schema);


