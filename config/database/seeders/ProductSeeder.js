/**
* This function seeds the predefined Products into the database
* @param  {Function} callback callback function that is called once the seeding is done
* @ignore
*/
module.exports = function(callback){
	var Product   = require('../../../app/models/Product').Product;
	var products = require('../../data/Products.json');

	Product.bulkCreate(products, { updateOnDuplicate : ['name'] }).then(function() {
		callback();
	}).catch(function(err) {
		callback(err);
	});
};
