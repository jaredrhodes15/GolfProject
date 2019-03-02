var db = require("../models");
var nodemailer = require('nodemailer')

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (
      dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (
      dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/sendemail", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "AvilaGolfTournament@gmail.com",
          pass: "Password1234!"
        }
      });

      const mailOptions = {
        from: 'sender@email.com', // sender address
        to: 'jaredrhodes15@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: '<p>Your html here</p>'// plain text body
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);

     });
    });
  });



};