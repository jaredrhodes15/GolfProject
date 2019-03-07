// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
$.get("/api", function(data) {

  // for each character that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "team-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);

    // Now add all of our character data to the well we just placed on the page

    // make the name an h2,
    $("#team-well-" + i).append("<h2>" + data[i].name + "</h2>");
    // the email an h3,
    $("#team-well-" + i).append("<h3>Role: " + data[i].email + "</h4>");
    // the age an h3,
    $("#team-well-" + i).append("<h3>Age: " + data[i].TeamMember1 + "</h4>");
    $("#team-well-" + i).append("<h3>Age: " + data[i].TeamMember2 + "</h4>");
    $("#team-well-" + i).append("<h3>Age: " + data[i].TeamMember3 + "</h4>");
    $("#team-well-" + i).append("<h3>Age: " + data[i].TeamMember4 + "</h4>");
  
  }
});
