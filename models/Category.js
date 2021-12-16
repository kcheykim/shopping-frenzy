const { Model, DataTypes } = require('sequelize'); //import Model class from Sequelize
const sequelize = require('../config/connection'); //import db connection 
class Category extends Model {} //init Category model by extending Sequelize Model class

Category.init({ //initialize Category class
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
});

module.exports = Category;