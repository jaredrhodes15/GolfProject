// var db = require("../models");
var path = require("path");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // load photo page
  app.get("/teams", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/teams.html"));
  });

  // load email page
  app.get("/email", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/emailChris.html"));
    
  });



  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
