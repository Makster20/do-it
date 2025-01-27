export default class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.tasks = [];
    }


    changeTitle(newTitle) {
        this.title = this.newTitle;
    }

    changeDescription(newDescription){
        this.description = newDescription;
    }

    addTask(task){
        this.tasks.push(task);
    }

    deleteTask(task){
        
    }
}