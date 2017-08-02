var Category  = require('../../app/models/Category').Category;
var Color     = require('../../app/models/Color').Color;
var Dimension = require('../../app/models/Dimension').Dimension;
var Order     = require('../../app/models/Order').Order;
var Product   = require('../../app/models/Product').Product;
var User      = require('../../app/models/User').User;

/* Order_User Relation */
User.hasMany(Order, { as: 'Orders', foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Order.belongsTo(User, { as: 'User', foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });

/* Order_Product Relation */
Order.belongsToMany(Product, { as: 'Products', through: 'order_product', onDelete: 'NO ACTION' });
Product.belongsToMany(Order, { as: 'Orders', through: 'order_product', onDelete: 'CASCADE' });

/* Category_Product Relation */
Category.hasMany(Product, { as: 'Products', foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Product.belongsTo(Category, { as: 'Category', foreignKey: { allowNull: false }, onDelete: 'NO ACTION' });

/* Color_Product Relation */
Color.belongsToMany(Product, { as: 'Products', through: 'color_product', onDelete: 'NO ACTION' });
Product.belongsToMany(Color, { as: 'Colors', through: 'color_product', onDelete: 'NO ACTION' });

/* Dimension_Product Relation */
Dimension.belongsToMany(Product, { as: 'Products', through: 'dimension_product', onDelete: 'NO ACTION' });
Product.belongsToMany(Dimension, { as: 'Dimensions', through: 'dimension_product', onDelete: 'NO ACTION' });
