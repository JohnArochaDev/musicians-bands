const {Sequelize, sequelize } = require('../db');
const DataTypes = require('sequelize')

class Musician extends Sequelize.Model {}

Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Musician'
})

module.exports = {
    Musician
};