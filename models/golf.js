module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Golf", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
