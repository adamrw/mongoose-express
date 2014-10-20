var mongoose=require('mongoose');

//define a schema or blueprint foer documents inside this collection
var drugSchema=mongoose.Schema({
	name: String,
	effect: String,
	dosage: Number,
});

//export the model so that other files can run commands in this collection
module.exports=mongoose.model('drug', drugSchema);