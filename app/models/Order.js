/**
* This Function define the Order model
* @param  {sequelize} connection the instance of the sequelize Object
*/
module.exports.defineOrder = function(sequelize) {
    var Sequelize = require("sequelize");

    module.exports.Order = sequelize.define('order', {
        phase: {
            type     : Sequelize.STRING(30),
            allowNull: false
        },
        payed: {
            type     : Sequelize.DOUBLE,
            allowNull: false
        },
        remaining: {
            type     : Sequelize.DOUBLE,
            allowNull: false
        },
        total: {
            type     : Sequelize.DOUBLE,
            allowNull: false
        },
        first_payment_due: {
            type     : Sequelize.DATE,
            allowNull: false
        },
        deadline_reached: {
            type     : Sequelize.BOOLEAN,
            allowNull: false
        },
        delivery: {
            type     : Sequelize.BOOLEAN,
            allowNull: false
        },
        finishing_time: {
            type     : Sequelize.DATE,
            allowNull: true
        },
        accepted: {
            type     : Sequelize.BOOLEAN,
            allowNull: false
        },
        confirmed: {
            type     : Sequelize.BOOLEAN,
            allowNull: false
        }
    },
    {
        underscored   : true,
        underscoredAll: true
    });
};
