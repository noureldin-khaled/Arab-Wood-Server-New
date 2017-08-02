/**
* This Function define the Dimension model
* @param  {sequelize} connection the instance of the sequelize Object
*/
module.exports.defineDimension = function(sequelize) {
    var Sequelize = require("sequelize");

    module.exports.Dimension = sequelize.define('dimension', {
        length: {
            type     : Sequelize.INTEGER(8),
            allowNull: false
        },
        width: {
            type     : Sequelize.INTEGER(8),
            allowNull: false
        }
    },
    {
        underscored   : true,
        underscoredAll: true
    });
};
