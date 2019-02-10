


var work = {
    "jobs": [
        {
            "employer": "Bank of Montreal",
            "title": "Customer Contact Representative",
            "location": "Mississauga",
            "date": "Winter 2012 - Winter 2013",
            "description": "Exceptional customer service, multitaksing and computer skills"
        },
        {
            "employer": "Best Buy",
            "title": "Geek Squad Agent",
            "location": "Toronto Eaton",
            "date": "Fall 2015 - Winter 2019",
            "description": "Exceptional customer service, technical and sales oriented skills"
        }
    ],
    display: function() {
        // Work    
        work.jobs.forEach(function (job) {      
            $("#workExperience").append(HTMLworkStart)
            let currentJobSelector = $(".work-entry:last")
            for(var jobKey in job) {
            if(jobKey === "employer") {
                let formattedEmp = HTMLworkEmployer.replace("%data%", job[jobKey])
                currentJobSelector.append(formattedEmp)
            } else if (jobKey === "title") {
                let formattedWorkTitle = HTMLworkTitle.replace("%data%", job[jobKey])
                currentJobSelector.append(formattedWorkTitle)
            } else if (jobKey === "date"){
                let formattedWorkDate = HTMLworkDates.replace("%data%", job[jobKey])
                currentJobSelector.append(formattedWorkDate)
            } else if (jobKey === "location"){
                let formattedWorkLocation = HTMLworkLocation.replace("%data%", job[jobKey])
                currentJobSelector.append(formattedWorkLocation)
            } else if (jobKey === "description") {          
                let formattedWorkDesc = HTMLworkDescription.replace("%data%", job[jobKey])
                currentJobSelector.append(formattedWorkDesc)
            }        
            }
        })
    }
};


var projects = {
    "projects": [
        {
            "title": "Madlib Generator",
            "dates": "Fall 2018",
            "description": "fill in the blank program",

            "images": [
                "https://i.imgur.com/9HaM1A0.jpg"
            ]
        },

        {
            "title": "Movie Website",
            "dates": "Fall 2018",
            "description": "Website with list of movies to select and see trailers",
            "images": [
                "https://i.imgur.com/owsPR5s.png"
            ]
        }
    ],
    display: function () {
        // Projects
        projects.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart)
            let currentProjectSelector = $(".project-entry:last")
            for(var projectKey in project) {
            if (projectKey === "title") {
                let formattedTitle = HTMLprojectTitle.replace("%data%", project[projectKey])
                currentProjectSelector.append(formattedTitle)
            } else if (projectKey === "dates") {
                let formattedDate = HTMLprojectDates.replace("%data%", project[projectKey])
                currentProjectSelector.append(formattedDate)
            } else if (projectKey === "description") {
                let formattedDesc = HTMLprojectDescription.replace("%data%", project[projectKey])
                currentProjectSelector.append(formattedDesc)
            } else if (projectKey === "images") {
                project[projectKey].forEach(function (imgSrc) {
                let formattedImg = HTMLprojectImage.replace("%data%", imgSrc)
                currentProjectSelector.append(formattedImg)
                })
            }
            }
        })
    }
};


var bio = {
    
    "name" : "Marc" ,
     "role" : "Something in IT",
     "contacts" : {
         "mobile" : "647-222-2354",
         "email" : "nunyabusiness@nyb.com",
         "github" : "CarSeech",
         "twitter" : "Twit",
         "location" : "North America"
     },

     "welcomeMessage" : "Hi",
     "skills" : ["Communication", "Analitical", "Multitasking"],
     "bioPic" : "images/me.jpg",
     display: function () {
        // Name
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name)
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role)
        $("#header").prepend(formattedHeaderName)
        $("#name").after(formattedHeaderRole)
        
        // Contact
        for(var contactKey in bio.contacts) {
            var formattedGen = HTMLcontactGeneric.replace("%contact%", contactKey).replace("%data%", bio.contacts[contactKey])          
            $("#topContacts").append(formattedGen)
            $("#footerContacts").append(formattedGen)
        }

        // Me
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
        var formattedBioConcat = formattedBioPic + formattedWelcome
        $("#topContacts").after(formattedBioConcat)

        // Skills
        $(".welcome-message").after(HTMLskillsStart)
        bio.skills.forEach(function (skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill))
        })
     }

};

var education = {
    "schools": [
        {
            "name": "York University",
            "date": "Fall 2019",
            "location": "North York",
            "degree": "BComm",
            "majors": ["IT"],
            "url": "https://www.yorku.ca/index.html"
        },
        {
            "name": "Seneca College",
            "date": "Fall 2014",
            "location": "North York",
            "diploma": "Fincial Planning",
            "majors": ["Finance"],
            "url": "http://www.senecacollege.ca/home.html"

        }
    ],

    display: function () {
        // Education
        education.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart)
            let currentSchoolSelector = $(".education-entry:last")
            for(var schoolKey in school) {
            if(schoolKey === "name") {
                let formattedName = HTMLschoolName.replace("%data%", school[schoolKey])
                currentSchoolSelector.append(formattedName)
            } else if(schoolKey === "date") {
                let formattedDate = HTMLschoolDates.replace("%data%", school[schoolKey])
                currentSchoolSelector.append(formattedDate)
            } else if(schoolKey === "location") {
                let formattedLocation = HTMLschoolLocation.replace("%data%", school[schoolKey])
                currentSchoolSelector.append(formattedLocation)
            } else if(schoolKey === "degree") {
                let formattedDeg = HTMLschoolDegree.replace("%data%", school[schoolKey])
                currentSchoolSelector.append(formattedDeg)
            } else if(schoolKey === "majors") {
                let formattedMaj = HTMLschoolMajor.replace("%data%", school[schoolKey])
                currentSchoolSelector.append(formattedMaj)
            } else if(schoolKey === "url") {
                currentSchoolSelector.children("a").prop("href", school[schoolKey])
            }
            }
        })
    }
};

// Where I lived and worked
$("#mapDiv").append(googleMap)