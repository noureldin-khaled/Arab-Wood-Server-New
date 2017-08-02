/**
* This Function define the Color model
* @param  {sequelize} connection the instance of the sequelize Object
*/
module.exports.defineColor = function(sequelize) {
    var Sequelize = require("sequelize");

    module.exports.Color = sequelize.define('color', {
        hex: {
            type     : Sequelize.STRING(6),
            allowNull: false
        }
    },
    {
        underscored   : true,
        underscoredAll: true
    });
};
