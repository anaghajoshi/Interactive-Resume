/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%","Anagha Joshi");
$("#header").append(formattedName);


var formattedRole = HTMLheaderRole.replace("%data%","Computer Engineering Graduate Student");
$("#header").append(formattedRole);

console.log("success!")