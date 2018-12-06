const Sequelize = require('sequelize');
const sequelize = require('../orm.config.js');

// Configuration allows us to change sequelize default assumtpions
const config = {
  freezeTableName: true, // Don't use plurals for db table names
  underscored: true // Use snake_case not camelCase
}

// Model for an Album
const Koalla = sequelize.define('koalla', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ready_to_transfer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  notes: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, config);

// Still need relationship to Artist
// const Koallas = require('./koalla.model');
// Koalla.belongsTo(Koalla);

module.exports = Koalla;