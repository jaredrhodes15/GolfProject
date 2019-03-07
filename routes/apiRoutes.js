var Team = require("../models/character.js");
var nodemailer = require('nodemailer')

module.exports = function (app) {
 // Search for Specific Character (or all characters) then provides JSON
 app.get("/api/:teams?", function(req, res) {
  if (req.params.teams) {
    // Display the JSON for ONLY that character.
    // (Note how we're using the ORM here to run our searches)
    Team.findOne({
      where: {
        routeName: req.params.characters
      }
    }).then(function(result) {
      return res.json(result);
    });
  } else {
    Team.findAll().then(function(result) {
      return res.json(result);
    });
  }
});

// If a user sends data to add a new character...
app.post("/api/new", function(req, res) {
  // Take the request...
  var team = req.body;

  // Create a routeName

  // Using a RegEx Pattern to remove spaces from character.name
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  var routeName = team.name.replace(/\s+/g, "").toLowerCase();

  // Then add the character to the database using sequelize
  Team.create({
    routeName: routeName,
    name: team.name,
    email: team.email,
    TeamMember1: team.TeamMember1,
    TeamMember2: team.TeamMember2,
    TeamMember3: team.TeamMember3,
    TeamMember4: team.TeamMember4,
    
  });

  res.status(204).end();
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