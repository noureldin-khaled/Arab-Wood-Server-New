/**
* This Function define the Category model
* @param  {sequelize} connection the instance of the sequelize Object
*/
module.exports.defineCategory = function(sequelize) {
    var Sequelize = require("sequelize");

    module.exports.Category = sequelize.define('category', {
        name: {
            type     : Sequelize.STRING(45),
            allowNull: false
        }
    },
    {
        underscored   : true,
        underscoredAll: true
    });
};
