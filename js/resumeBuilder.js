/* This is the file for builder the resume
   dynamically. This file interacts with
   helper.js and index.html
*/

// Object schema for the resume

var bio = {
    name: "Mayank Srivastav",
    role: "Software Engineer",
    contacts: {
        mobile: "+91 000",
        email: "mayanksri18@yahoo.in",
        github: "https://github.com/mayanksrivastav",
        location: "Bangalore, India"
    },
    welcomeMessage: "I am a Software Engineer working at Infosys.",
    skills: [
        "Web Development",
        "Programming Languages known: JavaScript, HTML, CSS, C++",
        "JS library known: JQuery",
        "Hands on experience on Grunt task runner"
    ],
    biopic: "", // TODO: Put the biopic
    display: function() {

    }
};

var education = {
    schools: [
        {
            name: "Graphic Era University",
            location: "Dehradun, India",
            degree: "Bachelors in Technology",
            majors: [
                "Computer Science & Enigneering"
            ],
            dates: "2008 - 2012"
        }
    ],
    onlineCourses: [
        {
            title: "Udacity Front End Nanodegree",
            school: "Udacity",
            dates: "2016 - ",
            url: "http://udacity.com"   // TODO: Put exact url if known
        }
    ],
    display: function() {

    }
};

var work = {
    jobs: [
        {
            employer: "Infosys",
            title: "Software Engineer",
            location: "Bangalore, Karnataka, India",
            dates: "2012 - In progress",
            description: "I am working on various Web Development technologies. I have build" +
                         "websites and desktop applications using Microsoft SharePoint Server and C#.NET."
        }
    ],
    display: function() {

    }
};

var projects = {
    projects: [
        {
            title: "Portfolio project" ,
            dates: "January 2017",
            description: "This projects showcases my portfolio including projects I have been working on.",
            images: ""  // TODO: add image url
        }
    ],
    display: function() {

    }
};