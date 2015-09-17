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



var work = {
    "jobs":[
        {
            "employer": "Buchannan & Edwards",
            "title": "Software Developement Intern",
            "location": "Charleston, SC",
            "dates": "JUN 2015 – AUG 2015",
            "description": "Leveraged JQuery and JavaScript to “Gamify” an official website for the Department of State. Gamification is to apply game design in non-gaming environments. I am responsible for the entire concept design as well as implementation."
        },
        {
            "employer": "Future Computing Technologies Lab (FCTL),Clemson University",
            "title": "Graduate Student Researcher",
            "location": "Clemson,SC",
            "dates": "JAN 2014 -Present",
            "description": "Proposed a taxonomy to map various high performance computing parallel applications to optimal architectures (CPU, GPGPU or MIC) depending on the characteristics of the application(s). <br> Analyzed trends to learn and extract useful insights about the architecture specific energy and power characteristics in homogenous as well as heterogeneous systems."
        },
        {
            "employer": "Clemson University",
            "title": "Graduate Grading/Teaching Assistant",
            "location": "Clemson,SC",
            "dates": "JAN 2014 -Present",
            "description": "Responsible for grading the programming assignments for undergraduate students taking the ‘Systems Programming using C’ course – ECE 2220 and ECE 3070 - Basic Electrical Engineering."
        }

    ]

};
// Display work json info
work.display = function(){

    for (var job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
            .append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
            .append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
            .append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
            .append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
    }

}

work.display();

//console.log("success!");