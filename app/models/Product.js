/**
* This Function define the Product model
* @param  {sequelize} connection the instance of the sequelize Object
*/
module.exports.defineProduct = function(sequelize) {
    var Sequelize = require("sequelize");

    module.exports.Product = sequelize.define('product', {
        name: {
            type     : Sequelize.STRING(45),
            allowNull: false
        },
        price: {
            type     : Sequelize.DOUBLE(10, 2),
            allowNull: false
        },
        description: {
            type     : Sequelize.TEXT,
            allowNull: false
        }
    },
    {
        underscored   : true,
        underscoredAll: true
    });
};
