var CategorySeeder = require('./CategorySeeder');
var ProductSeeder = require('./ProductSeeder');

/**
* This function seeds the predefined values into the database
* @param  {Function} callback callback function that is called once the seeding is done
*/
module.exports = function(callback){
    CategorySeeder(function(err) {
        if (err) {
            callback(err);
        }
        else {
            // ProductSeeder(function(err) {
            //     if (err) {
            //         callback(err);
            //     }
            //     else {
                    callback();
            //     }
            // });

        }
    });
};
