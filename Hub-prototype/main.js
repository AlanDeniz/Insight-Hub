
// Filtering system //

// Get references to the filter and topic buttons and the container where projects will be displayed
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    const topics = document.querySelectorAll('.topic');
    const projectsContainer = document.querySelector('.projects');
    let activeFilter = 'all';
    let activeTopic = 'all';

    // JSON array containing data for each project 
    const projectsData = [
        {
            title: "Making life with neck stoma easier",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus nisl non molestie auctor. Nulla facilisi. Mauris dapibus eu magna ac scelerisque. Duis in euismod ipsum, non tristique felis. Suspendisse laoreet nisi vitae lacus luctus blandit. Curabitur et cursus erat. Quisque sed pretium turpis. ",
            topic: "WWDC",
            filter: "video",
            image: "./assets/Case_1.png"
        },
        {
            title: "Enhance your audio experiences",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus nisl non molestie auctor. Nulla facilisi. Mauris dapibus eu magna ac scelerisque. Duis in euismod ipsum, non tristique felis. Suspendisse laoreet nisi vitae lacus luctus blandit. Curabitur et cursus erat. Quisque sed pretium turpis. ",
            topic: "Strategy",
            filter: "webinar",
            image: "./assets/Case_2.png"
        },
        {
            title: "Never far away from your banking services",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus nisl non molestie auctor. Nulla facilisi. Mauris dapibus eu magna ac scelerisque. Duis in euismod ipsum, non tristique felis. Suspendisse laoreet nisi vitae lacus luctus blandit. Curabitur et cursus erat. Quisque sed pretium turpis. ",
            topic: "People",
            filter: "event",
            image: "./assets/Case_3.png"
        },
        {
            title: "Buy tickets and keep track of your journeys",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus nisl non molestie auctor. Nulla facilisi. Mauris dapibus eu magna ac scelerisque. Duis in euismod ipsum, non tristique felis. Suspendisse laoreet nisi vitae lacus luctus blandit. Curabitur et cursus erat. Quisque sed pretium turpis. ",
            topic: "Press",
            filter: "webinar",
            image: "./assets/Case_4.png"
        }
    ];

    // Function to generate and display project elements
    function displayProjects(projects) {
        projectsContainer.innerHTML = ''; // Clear existing projects
        projects.forEach(project => {
            const projectElement = document.createElement('div'); // Add the 'project' class to the div
            projectElement.classList.add('project');
            projectElement.setAttribute('data-topic', project.topic); // Set the topic as a data attribute
            projectElement.setAttribute('data-filter', project.filter); // Set the filter as a data attribute

    // Set the inner HTML of the project div with project data
            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <span class="tag">${project.topic}</span>
                <span class="tag">${project.filter}</span>
            `;

            projectsContainer.appendChild(projectElement);
        });
    }

    // Initial display of projects
    displayProjects(projectsData);

    // Add event listeners to each filter button
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
          // Remove 'active' class from all filter buttons and add it to the clicked button
            filters.forEach(btn => btn.classList.remove('active'));
            filter.classList.add('active');
            activeFilter = filter.getAttribute('data-filter'); // Update activeFilter to the clicked filter
            filterProjects(); // Filter and display projects based on the selected filter and topic
        });
    });
 
     // Add event listeners to each topic button
    topics.forEach(topic => {
        topic.addEventListener('click', () => {
             // Remove 'active' class from all topic buttons and add it to the clicked button
            topics.forEach(btn => btn.classList.remove('active'));
            topic.classList.add('active');
            activeTopic = topic.getAttribute('data-topic'); // Update activeTopic to the clicked topic
            filterProjects(); // Filter and display projects based on the selected filter and topic
        });
    });

    // Function to filter projects based on the selected topic and filter
    function filterProjects() {
         // Check if the project matches the active topic and filter
        const filteredProjects = projectsData.filter(project => {
            const topicMatch = (activeTopic === 'all' || project.topic === activeTopic);
            const filterMatch = (activeFilter === 'all' || project.filter === activeFilter);
            return topicMatch && filterMatch; // Include the project if it matches both criteria
        });
        displayProjects(filteredProjects); // Display the filtered projects
    }
});

// Toggle button functions //

// Function to toggle the visibility of the filter tags.
function showFormats() {
    const show = document.getElementById("filters");
    show.style.display = (show.style.display === "flex") ? "none" : "flex";
}

// Function to toggle the visibility of the topic tags.
function showTopics() {
    const show = document.getElementById("topics");
    show.style.display = (show.style.display === "flex") ? "none" : "flex";
}


// Navigation mobile menu //

// Function to toggle the menu visibility.
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
}
