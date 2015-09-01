/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%","Anagha Joshi");
var formattedRole = HTMLheaderRole.replace("%data%","Computer Engineering Graduate Student");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

console.log("success!")