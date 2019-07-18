/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */

// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practise. Each time you make some progress in software
// development, you want to save a snapshot.


module.exports = function runChallenges(check) {
  // Ex 1. Read what's written in the email input
  //       Make the function getEmail() return it
  const getEmail = () => {
    // TODO: return the email
    let readEmail = document.querySelector("#email").value;
    return readEmail;
  };

  // /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
  const borisesEmail = getEmail();

  // Ex 2. Change the content of the email input by writing your own email address
  document.querySelector("#email").value = "taha@taha.com";

  // Ex 3. Replace the email hint (next to the input) with 'This is my email now'
  //       The text should be emphasized using a <strong> tag
  document.querySelector("#email-hint").innerHTML = "<strong>This is my email now</strong>";

  // Ex 4. Add the .blue CSS class to the th elements
  var blueclass = document.querySelectorAll("th");
  blueclass.forEach(function (eachBlue) {
    eachBlue.className = "blue";
  });

  // Ex 5. Count the number of table body rows there are
  //       Make the function teamCount() return it
  const teamCount = () => {
    // TODO: return the number of teams
    var teamCounter = document.querySelectorAll("tbody tr");
    return teamCounter.length;
  };

  // /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
  const teamCountBeforeAddition = teamCount();

  // Ex 6. Say there is a 15th team added to the table.
  //       Add a row at the bottom, this new team should have zero points.
  var table = document.querySelector("table");
  var newRow = table.insertRow(15);
  var rate = newRow.insertCell(0);
  rate.innerHTML = 15;
  var name = newRow.insertCell(1);
  name.innerHTML = "Whatever";
  var point = newRow.insertCell(2)
  point.innerHTML = 0;

  // Ex 7. Write some code to sum all points given to all teams
  //       Make the function summarizePoints() return it
  const summarizePoints = () => {
    // TODO: return the sum
    var teamPoints = document.querySelectorAll("tbody>tr td:last-child");
    var points = 0;
    teamPoints.forEach(function (point) {
      points += parseInt(point.innerHTML);
    });
    return points
  };

  // Ex 8. Change the background color of all `<th>` cells to #DDF4FF
  var tableHead = document.querySelectorAll("th");
  tableHead.forEach(function (header){
    header.style.backgroundColor = "#DDF4FF";
  });

  // Ex 9. Remove the "Email:" label from the DOM
  var emailLabel = document.querySelector("label:first-child");
  emailLabel.remove();

  // Checking exercise answers. DO NOT MODIFY THIS LINE
  check(borisesEmail, teamCountBeforeAddition, summarizePoints());
};