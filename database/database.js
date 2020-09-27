const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas', 'root', '312111', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;