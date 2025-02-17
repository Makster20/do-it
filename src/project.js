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

    deleteTask(title, description){
        for (let i = 0; i < this.tasks.length; i++) {
            if(title === tasks[i].title && description === this.tasks[i].description){
                const deleted = this.tasks.splice(i, 1);
                break
            }
            
        }
    }
}