//require our model 
var Drug=require('../models/drugs.js');

var indexController = {
	index: function(req, res) {
		Drug.find({}, function(err, results){
		//wait for find() to complete before calling render
		res.render('index', {
			drugs: results
		});
	});
},

	smokeIt: function(req, res) {
		var drugData=req.body;
		//use the submitted data to create a new Drug instance
		var drug=new Drug(drugData);
		drug.save(function(err, result){
			//send  the newly saved docuyment back to the browser
			// res.semd({
			// 	err: err,
			// 	result: result
			// });
		//redirect back to main listing page
		res.redirect('/');
		});
	}
};

module.exports = indexController;