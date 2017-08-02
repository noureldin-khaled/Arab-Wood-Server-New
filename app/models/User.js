/**
* This Function define the User model
* @param  {sequelize} connection the instance of the sequelize Object
*/
module.exports.defineUser = function(sequelize) {
    var Sequelize = require("sequelize");
    var bcrypt    = require('bcrypt-nodejs');

    module.exports.User = sequelize.define('user', {
        role: {
            type        : Sequelize.ENUM('Admin', 'Normal'),
            allowNull   : true,
            defaultValue: 'Normal'
        },
        first_name: {
            type     : Sequelize.STRING(45),
            allowNull: false
        },
        last_name: {
            type     : Sequelize.STRING(45),
            allowNull: false
        },
        email: {
            type     : Sequelize.STRING,
            unique   : true,
            allowNull: false
        },
        password: {
            type     : Sequelize.STRING,
            set      : function(value){
                this.setDataValue('password', bcrypt.hashSync(value));
            },
            allowNull: false
        },
        city: {
            type     : Sequelize.STRING(35),
            allowNull: false
        },
        address: {
            type     : Sequelize.TEXT,
            allowNull: false
        },
        phone_number: {
            type     : Sequelize.STRING,
            allowNull: false
        }
    },
    {
        underscored    : true,
        underscoredAll : true,
        instanceMethods:
        /** @lends User.prototype */
        {
            /**
            * This function validates the password of the user.
            * @param  {String} password the claimed password.
            * @return {Boolean} true if the claimed password matches the real one.
            */
            validPassword: function(password) {
                return bcrypt.compareSync(password, this.password);
            },
            /**
            * This function checks if the user is an admin.
            * @return {Boolean} true if the claimed password matches the real one.
            */
            isAdmin: function() {
                return this.role === 'Admin';
            },
            /**
            * This function checks if the user is a normal user.
            * @return {Boolean} true if the claimed password matches the real one.
            */
            isNormal: function() {
                return this.role === 'Normal';
            }
        }
    });
};
