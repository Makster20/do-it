export default class Task {
    constructor() {
        this.title = 'New Task';
        this.description = '';
        this.date = '';
        this.favourited = false;
        this.completed = false;
    }

    changeTitle(newTitle){
        this.title = newTitle
    }
    
    changeDescription(newDescription){
        this.description = newDescription
    }

    changeDate(newDate){
        this.date = newDate;
    }
}