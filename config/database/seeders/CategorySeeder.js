/**
* This function seeds the predefined Categories into the database
* @param  {Function} callback callback function that is called once the seeding is done
* @ignore
*/
module.exports = function(callback){
	var Category   = require('../../../app/models/Category').Category;
	var categories = require('../../data/Categories.json');

	Category.bulkCreate(categories, { updateOnDuplicate : ['name'] }).then(function() {
		callback();
	}).catch(function(err) {
		callback(err);
	});
};
