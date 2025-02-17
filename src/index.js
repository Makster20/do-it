// index.js
import './style.css';
import  Task  from './task.js';
import  Project  from './project.js';
import { toggleSidebar, openInfoBox, closeInfoBox, renderProjectPage, updateProjectList } from './DOM.js';

const ToDoApp = () => {
    // Initializing default projects
    const Today = new Project('Today', 'These are the projects that you need to complete today!');
    const Upcoming = new Project('Upcoming', 'These are the projects that are in the coming week!');
    const Favourites = new Project('Favourites', 'These are your favourite projects!')

    const Project0 = new Project('My Tasks', 'These are the tasks for myself!')

    
    // Initializing global variables
    const projects = [Project0];
    const defaultProjects = [Today, Upcoming, Favourites]
    
    let currentProjectNo = 0 // Project0 wil be the default when the user arrives

    const init = () => {
        // Miscallenous functions

        // Change title name of project
        const attachTitleListener = () => {
            let projectTitle = document.querySelector('.project .project-title'); // Get the current title element
            
            if (!projectTitle) return; // Exit if the element does not exist
        
            projectTitle.addEventListener('blur', () => {
                let currentProject = projects[currentProjectNo]; // Get current project
                
                if (currentProject && projectTitle.value.trim() !== '') {
                    currentProject.title = projectTitle.value.trim(); // Update project title
                    console.log('Updated Projects:', projects);
                }
            });
        };

        // Change description of project
        const attachDescriptionListener = () => {
            let projectDescription = document.querySelector('.project .project-description'); // Get the current description element
            console.log('asfsad')
            
            if (!projectDescription) return; // Exit if the element does not exist
        
            projectDescription.addEventListener('blur', () => {
                let currentProject = projects[currentProjectNo]; // Get current project
                
                if (currentProject && projectDescription.value.trim() !== '') {
                    currentProject.description = projectDescription.value.trim(); // Update project description
                    console.log('Updated Projects:', projects);
                }
            });
        };





        // Default page when user enters app
        renderProjectPage(Project0.title, Project0.description, Project0.tasks)
        attachTitleListener();
        attachDescriptionListener();

        // Navbar elements
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const infoBox = document.querySelector('.card')
        const backdrop = document.querySelector('.backdrop')
        const infoButton = document.querySelector('.info-button')
        const infoClose = document.querySelector('.card-action')

        // Sidebar elements
        const sidebar = document.querySelector('aside')
        const todayProject = document.querySelector('aside .today-project')
        const upcomingProject = document.querySelector('aside .upcoming-project')
        const favouritesProject = document.querySelector('aside .favourites-project')
        const projectList = document.querySelector('aside .project-list')
        let projectListItems = document.querySelectorAll('aside .project-list li')
        const newProjectButton =document.querySelector('aside svg')

        // Project elements
        let projectTitle = document.querySelector('.project .project-title')
        const projectDescription = document.querySelector('.project .project-description')

        // Task elements
        const taskCheckmark = document.querySelector('.checkmark')
        const taskTitle = document.querySelector('.task-title')
        const taskDescription = document.querySelector('.task-description')
        const taskDate = document.querySelector('.task-date')
        const taskFavouriteIcon = document.querySelector('.favourite-icon')
        const taskDeleteIcon = document.querySelector('.delete-icon')
        const addTask = document.querySelector('.add-task')

        // Navbar interactions
        infoButton.addEventListener('click', () => {
            openInfoBox(infoBox, backdrop)
        })

        infoClose.addEventListener('click', () => {
            closeInfoBox(infoBox, backdrop)
        })

        hamburgerMenu.addEventListener('click', () => {
            toggleSidebar(sidebar);
        });

        
        // Sidebar Interactions
        todayProject.addEventListener('click', () => {
            renderProjectPage(Today.title, Today.description, Today.tasks)
            currentProjectNo = 'today'

            // Re-select the project title element after rendering
            let projectTitle = document.querySelector('.project .project-title');
            projectTitle.setAttribute('readonly', '')

            // Re-select the project description element after rendering
            let projectDescription = document.querySelector('.project .project-description');
            projectDescription.setAttribute('readonly', '')
        })

        upcomingProject.addEventListener('click', () => {
            renderProjectPage(Upcoming.title, Upcoming.description, Upcoming.tasks)
            currentProjectNo = 'upcoming'

            // Re-select the project title element after rendering
            let projectTitle = document.querySelector('.project .project-title');
            projectTitle.setAttribute('readonly', '')

            // Re-select the project description element after rendering
            let projectDescription = document.querySelector('.project .project-description');
            projectDescription.setAttribute('readonly', '')
        })

        favouritesProject.addEventListener('click', () => {
            renderProjectPage(Favourites.title, Favourites.description, Favourites.tasks)
            currentProjectNo = 'favourites'

            // Re-select the project title element after rendering
            let projectTitle = document.querySelector('.project .project-title');
            projectTitle.setAttribute('readonly', '')

            // Re-select the project description element after rendering
            let projectDescription = document.querySelector('.project .project-description');
            projectDescription.setAttribute('readonly', '')
        })

        // This is to load the event listener with the updated projects (list items)
        projectList.addEventListener('click', () => {
            projectListItems = document.querySelectorAll('aside .project-list li')
        })

        projectList.addEventListener('click', (event) => {
            const clickedProject = event.target.closest('li'); // Get the clicked <li>
        
            if (!clickedProject) return; // Exit if the click is not on an <li>
        
            for (let i = 0; i < projects.length; i++) {
                if (clickedProject.textContent.trim() === projects[i].title) {
                    renderProjectPage(projects[i].title, projects[i].description, projects[i].tasks);
                    attachTitleListener();
                    attachDescriptionListener();
                    console.log(currentProjectNo);
                    
                    currentProjectNo = i;

                    console.log('Current project index:', currentProjectNo);
                    break;
                }
            }

            // Re-select projectTitle before modifying it
            let projectTitle = document.querySelector('.project .project-title');
            projectTitle.removeAttribute('readonly')

            // Re-select projectDescription before modifying it
            let projectDescription = document.querySelector('.project .project-description');
            projectDescription.removeAttribute('readonly')
        });

        newProjectButton.addEventListener('click', () => {
            const newProject = new Project('New Project', 'Enter your description');

            projects.push(newProject); // Add to array

            renderProjectPage(newProject.title, newProject.description, [])
            attachTitleListener();
            attachDescriptionListener();
            updateProjectList(projectList, newProject)
            
        })

        // Project interactions
        
        // Project pages
        // renderProjectPage('asf', 'sdafas', [testTask])



        
        
    }

    
    return { init }
}



const app = ToDoApp();
app.init()