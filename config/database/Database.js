var mysql     = require('mysql');
var Sequelize = require('sequelize');

/* Connecting to database */
var db_name   = process.env.DB_NAME;
var sequelize = new Sequelize(db_name, process.env.DB_USER, process.env.DB_PASS,
{
   host: process.env.DB_HOST,
   dialect: 'mysql',
   port:    3306,
   logging: (process.env.SQL_LOG === 'true')? true : false,
   define: {
      charset: 'utf8'
   }
});

module.exports.initialize = function(callback) {
   /* define the models */
   require('../../app/models/Category').defineCategory(sequelize);
   require('../../app/models/Color').defineColor(sequelize);
   require('../../app/models/Dimension').defineDimension(sequelize);
   require('../../app/models/Order').defineOrder(sequelize);
   require('../../app/models/Product').defineProduct(sequelize);
   require('../../app/models/User').defineUser(sequelize);

   /* defining relation */
   require('../../app/models/Relations');

   var force = (process.env.RESET_DB === 'true')? true : false;

   sequelize.sync({ force: force }).then(function(err) {
      /* seeding */
      require('./seeders/Seeder')(function(err) {
         if(err){
            callback(err);
         }
         else{
            callback();
         }
      });
   }, function (err) {
      callback(err);
   });
};
