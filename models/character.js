// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Team = sequelize.define("character", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  name: Sequelize.STRING,
  // the character's role (a string)
  email: Sequelize.STRING,
  // the character's age (a string)
  TeamMember1: Sequelize.STRING,
  TeamMember2: Sequelize.STRING,
  TeamMember3: Sequelize.STRING,
  TeamMember4: Sequelize.STRING
  
},{
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Team.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Team;
