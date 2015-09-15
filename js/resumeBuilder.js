/*
This is empty on purpose! Your code to build the resume will go here.
 */


//var formattedName = HTMLheaderName.replace("%data%","Anagha Joshi");
//var formattedRole = HTMLheaderRole.replace("%data%","Computer Engineering Graduate Student");
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
    "name": "Anagha Joshi",
    "role": "Computer Engineering Graduate Student",
    "welcomeMessage": "I am a result-driven, articulate and analytical engineer who can think “out of the box” ",
    "contacts": {
        "mobile": "(864)-247-7626",
        "email": "anaghaj@g.clemson.edu",
        "GitHub": "anaghajoshi",
        "LinkedInr": "anaghaj",
        "location": "Clemson,SC"
    },
    "bioPic": "images/logo.jpg",
    "skills": ["C", "Python","Java","SQL","Shell","VHDL","MPI","CUDA","OpenCL", "HTML&CSS", "JavaScript"],
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.GitHub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.LinkedInr);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedName + formattedRole);
        $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
        $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        for (var e in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

//console.log("success!");