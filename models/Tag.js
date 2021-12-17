const { Model, DataTypes } = require('sequelize'); //import Model class from Sequelize
const sequelize = require('../config/connection.js'); //import db connection 

class Tag extends Model {} //init Tag model by extending Sequelize Model class

Tag.init({ //initialize Tag class
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tag_name: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
});

module.exports = Tag;