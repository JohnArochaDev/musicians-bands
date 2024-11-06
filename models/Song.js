const {Sequelize, sequelize} = require('../db');
const DataTypes = require('sequelize')

class Song extends Sequelize.Model {}

Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Song'
})

module.exports = {
    Song
};