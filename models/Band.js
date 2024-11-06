const {Sequelize, sequelize } = require('../db');
const DataTypes = require('sequelize')

class Band extends Sequelize.Model {}

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Band'
})

module.exports = {
    Band
};