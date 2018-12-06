const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );

// Test our Sequelize connection
const sequelize = require('./orm.config.js');

// Database init - create Tables if not there
const Koalla = require('./models/koalla.model');
Koalla.sync();


// Routers
const koallaRouter = require('./routes/koalla.router');
app.use('/koalla', koallaRouter);

// Serve static files
app.use(express.static('build'));

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

module.exports = app;