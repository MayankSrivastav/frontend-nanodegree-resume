/* This is the file for builder the resume
   dynamically. This file interacts with
   helper.js and index.html
*/

// Object schema for the resume

var bio = {
    name: 'Mayank Srivastav',
    role: 'Software Engineer',
    contacts: {
        mobile: '+91 000',
        email: 'mayanksri18@yahoo.in',
        github: 'https://github.com/mayanksrivastav',
        location: 'Bangalore, India'
    },
    welcomeMessage: 'I am a Software Engineer working at Infosys.',
    skills: [
        'Web Development',
        'Programming Languages known: JavaScript, HTML, CSS, C++',
        'JS library known: JQuery',
        'Hands on experience on Grunt task runner'
    ],
    biopic: 'images/fry.jpg', // TODO: Put the biopic
    display: function() {
        // Append the header information
        var headerName = HTMLheaderName.replace('%data%', bio.name);
        var headerRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(headerRole);
        $('#header').prepend(headerName);

        // Append the contacts information
        //var contactGeneric = ? TODO: Need clarification
        var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(mobile);

        var email = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(email);

        var github = HTMLgithub.replace('%data%', bio.contacts.github);
        $('#topContacts').append(github);

        var location = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(location);

        var footerContact = $('#topContacts').html();
        $('#footerContacts').append(footerContact);

        var bioPic = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').append(bioPic);

        var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(welcomeMessage);

        $('#header').append(HTMLskillsStart);

        // Iterate over skills array and append
        // the values one by one
        this.skills.forEach(function(currentValue){
            var value = HTMLskills.replace('%data%', currentValue);
            $('#skills').append(value);
        });
    }
};

var education = {
    schools: [
        {
            name: 'Graphic Era University',
            location: 'Dehradun, India',
            degree: 'Bachelors in Technology',
            majors: [
                'Computer Science & Enigneering'
            ],
            dates: '2008 - 2012'
        }
    ],
    onlineCourses: [
        {
            title: 'Udacity Front End Nanodegree',
            school: 'Udacity',
            dates: '2016 - ',
            url: 'http://udacity.com'   // TODO: Put exact url if known
        }
    ],
    display: function() {
        $('#education').append(HTMLschoolStart);

        // Iterate over the schools array &
        // append values one by one
        for (var i = 0; i < this.schools.length; i++) {
            var schoolName = HTMLschoolName.replace('%data%', this.schools[i].name);
            var schoolDegree = HTMLschoolDegree.replace('%data%', this.schools[i].degree);
            $('.education-entry').append(schoolName + schoolDegree);

            var schoolLocation = HTMLschoolLocation.replace('%data%', this.schools[i].location);
            $('.education-entry').append(schoolLocation);

            var schoolDates = HTMLschoolDates.replace('%data%', this.schools[i].dates);
            $('.education-entry').append(schoolDates);

            for (var j = 0; j < this.schools[i].majors.length; j++) {
                var schoolMajor = HTMLschoolMajor.replace('%data%', this.schools[i].majors[j]);
                $('.education-entry').append(schoolMajor);
            }
        }

        $('#education').append(HTMLonlineClasses);

        // Iterate over the onlineCourses array &
        // append values one by one
        for (var k = 0; k < this.onlineCourses.length; k++) {
            var onlineTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[k].title);
            var onlineSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[k].school);
            $('.education-entry').append(onlineTitle + onlineSchool);

            var onlineDates = HTMLonlineDates.replace('%data%', this.onlineCourses[k].dates);
            $('.education-entry').append(onlineDates);

            var onlineURL = HTMLonlineURL.replace('%data%', this.onlineCourses[k].url);
            $('.education-entry').append(onlineURL);
        }
    }
};

var work = {
    jobs: [
        {
            employer: 'Infosys',
            title: 'Software Engineer',
            location: 'Bangalore, Karnataka, India',
            dates: '2012 - In progress',
            description: 'I am working on various Web Development technologies. I have build ' +
                         'websites and desktop applications using Microsoft SharePoint Server' +
                         ' and C#.NET.'
        }
    ],
    display: function() {
        $('#workExperience').append(HTMLworkStart);

        // Iterate over the jobs array &
        // append values one by one
        for (var i = 0; i < this.jobs.length; i++) {
            var workEmployer = HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
            var workTitle = HTMLworkTitle.replace('%data%', this.jobs[i].title);
            $('.work-entry').append(workEmployer + workTitle);

            var workLocation = HTMLworkLocation.replace('%data%', this.jobs[i].location);
            $('.work-entry').append(workLocation);

            var workDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
            $('.work-entry').append(workDates);

            var workDescription = HTMLworkDescription.replace('%data%', this.jobs[i].description);
            $('.work-entry').append(workDescription);
        }
    }
};

var projects = {
    projects: [
        {
            title: 'Portfolio project' ,
            dates: 'January 2017',
            description: 'This projects showcases my portfolio including projects I have been working on.',
            images: 'images/197x148.gif'  // TODO: add image url
        }
    ],
    display: function() {
        $('#projects').append(HTMLprojectStart);

        // Iterate over the projects array &
        // append values one by one
        for (var i = 0; i < this.projects.length; i++) {
            var projectTitle = HTMLprojectTitle.replace('%data%', this.projects[i].title);
            $('.project-entry').append(projectTitle);

            var projectDates = HTMLprojectDates.replace('%data%', this.projects[i].dates);
            $('.project-entry').append(projectDates);

            var projectDescription = HTMLprojectDescription.replace('%data%', this.projects[i].description);
            $('.project-entry').append(projectDescription);

            var projectImage = HTMLprojectImage.replace('%data%', this.projects[i].images);
            $('.project-entry').append(projectImage);
        }
    }
};

// Call display methods on all the
// objects
function displayAllData() {
    bio.display();
    work.display();
    projects.display();
    education.display();
}

window.addEventListener('load', displayAllData());