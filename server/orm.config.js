const Sequelize = require('sequelize');

const DATABASE_NAME = 'koalla_library';

// Do this so that we don't get a deprecation warning
const config = {
  operatorsAliases: false
}

let sequelize = null;
if (process.env.DATABASE_URL){
  sequelize = new Sequelize(process.env.DATABASE_URL, config);
} else {
  let connectionUrl = `postgres://localhost:5432/${DATABASE_NAME}`;
  sequelize = new Sequelize(connectionUrl, config);
}

// Optional: Test the connection
sequelize
  .authenticate()
  .then( () => {
    console.log('sequelize database connection successful');
  })
  .catch( (error) => {
    console.log('error with sequelize database connection', error);
  });

module.exports = sequelize;