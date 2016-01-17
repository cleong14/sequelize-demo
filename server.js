// require in sequelize connector
var db = require('./models');

// sync models with the database
db.sequelize.sync();