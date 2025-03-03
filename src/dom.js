export const toggleSidebar = sidebar => {
    sidebar.classList.toggle('hidden');
}

export const openInfoBox = (infoBox, backdrop) => {
    infoBox.classList.remove('card-hidden')
    backdrop.classList.remove('backdrop-hidden')
}

export const closeInfoBox = (infoBox, backdrop) => {
    infoBox.classList.add('card-hidden')
    backdrop.classList.add('backdrop-hidden')
}

export const renderProjectPage = (title, description, tasks) => {
    const sectionContainer = document.querySelector('.section-container');
    sectionContainer.innerHTML = ''

    // Create the project section
    const project = document.createElement('section');
    project.setAttribute('class', 'project');

    // Create and append the project title input
    const projectTitle = document.createElement('input');
    projectTitle.setAttribute('class', 'project-title');
    projectTitle.setAttribute('placeholder', 'New Project');
    projectTitle.value = title || 'My Tasks';
    project.appendChild(projectTitle)

    // Create and append the project description textarea
    const projectDescription = document.createElement('textarea');
    projectDescription.setAttribute('class', 'project-description');
    projectDescription.textContent = description || 'These are the tasks for myself.';
    project.appendChild(projectDescription);

    // Create and append the tasks div
    const tasksContainer = document.createElement('div');
    tasksContainer.setAttribute('class', 'tasks');

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.setAttribute('class', 'task');

        // Checkmark div
        const checkmark = document.createElement('div');
        checkmark.setAttribute('class', 'checkmark unchecked');
        checkmark.setAttribute('title', 'Mark as Complete');
        taskElement.appendChild(checkmark);

        // Task title input
        const taskTitle = document.createElement('input');
        taskTitle.setAttribute('class', 'task-title');
        taskTitle.setAttribute('type', 'text');
        taskTitle.setAttribute('placeholder', 'Enter task name...');
        taskTitle.value = task.title || 'Task Title';
        taskElement.appendChild(taskTitle);

        // Task description textarea
        const taskDesc = document.createElement('textarea');
        taskDesc.setAttribute('class', 'task-description');
        taskDesc.setAttribute('placeholder', 'Enter task description...');
        taskDesc.value = task.description || '';
        taskElement.appendChild(taskDesc);

        // Task date input
        const taskDate = document.createElement('input');
        taskDate.setAttribute('class', 'task-date');
        taskDate.setAttribute('type', 'date');
        taskDate.value = task.date || '';
        taskElement.appendChild(taskDate);

        // Favourite Icon (SVG)
        const favIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        favIcon.setAttribute('class', 'favourite-icon');
        favIcon.setAttribute('viewBox', '0 0 24 24');
        favIcon.setAttribute('stroke-width', '2');
        favIcon.setAttribute('stroke', '#c00505');
        const favPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        favPath.setAttribute('stroke-linecap', 'round');
        favPath.setAttribute('stroke-linejoin', 'round');
        favPath.setAttribute('d', 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z');
        favIcon.appendChild(favPath);
        taskElement.appendChild(favIcon);

        // Delete Icon (SVG)
        const deleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        deleteIcon.setAttribute('class', 'delete-icon');
        deleteIcon.setAttribute('viewBox', '0 0 24 24');
        deleteIcon.setAttribute('stroke-width', '1.5');
        deleteIcon.setAttribute('fill', 'none');
        deleteIcon.setAttribute('stroke', 'black');
        const deletePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        deletePath.setAttribute('stroke-linecap', 'round');
        deletePath.setAttribute('stroke-linejoin', 'round');
        deletePath.setAttribute('d', 'm14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0');
        deleteIcon.appendChild(deletePath);
        taskElement.appendChild(deleteIcon);

        tasksContainer.appendChild(taskElement);
    });

    project.appendChild(tasksContainer);

    // Create and append the "Add Task" section
    const addTask = document.createElement('div');
    addTask.setAttribute('class', 'add-task add-task-full');

    const addTaskIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    addTaskIcon.setAttribute('class', 'size-4 add-task');
    addTaskIcon.setAttribute('viewBox', '0 0 16 16');
    const addTaskPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    addTaskPath.setAttribute('fill-rule', 'evenodd');
    addTaskPath.setAttribute('clip-rule', 'evenodd');
    addTaskPath.setAttribute('class', 'add-task');
    addTaskPath.setAttribute('d', 'M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z');
    addTaskIcon.appendChild(addTaskPath);
    addTask.appendChild(addTaskIcon);

    const addTaskText = document.createElement('h3');
    addTaskText.setAttribute('class', 'add-task');
    addTaskText.textContent = 'Add Task';
    addTask.appendChild(addTaskText);

    project.appendChild(addTask);

    // Append the project section to the SectionContainer 
    sectionContainer.appendChild(project);
};

export const updateProjectList = (projectList, newProject) => {
    const newProjectLi = document.createElement('li')
    newProjectLi.innerText = newProject.title
    projectList.appendChild(newProjectLi)
}   
