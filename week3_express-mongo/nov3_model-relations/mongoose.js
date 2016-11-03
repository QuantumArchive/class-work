const mongoose = require('mongoose');
// make sure we're using native promises,
// not the library that comes with mongodb
mongoose.Promise = Promise;

const dbURI = 'mongodb://localhost/mythical'; 
mongoose.connect(dbURI);
// If the connection throws an error
mongoose.connection.on('error',function (err) {  
	console.log( 'Mongoose default connection error: ' + err );
}); 

const schema = new mongoose.Schema({
    name: String,
    horn: String
});

const Unicorn = mongoose.model('Unicorn', schema);
console.log(Unicorn.modelName);

//create a new unicorn
// const lilac = new Unicorn({ name: 'lilac', horn: 'titanium' });

// lilac.save()
//     .then(savedUnicorn => console.log(savedUnicorn))
//     .catch(err => console.error(err));

// Unicorn.find()
//     .then(unicorns => console.log(unicorns));