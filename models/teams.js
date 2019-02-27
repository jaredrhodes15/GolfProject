module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define("Teams", {
    teamName: DataTypes.STRING,
    email: DataTypes.TEXT,
    player1: DataTypes.TEXT,
    player2: DataTypes.TEXT,
    player3: DataTypes.TEXT,
    player4: DataTypes.TEXT,
    comments: DataTypes.TEXT

  });
  return teams;
};
