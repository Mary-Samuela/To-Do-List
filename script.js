// logic

class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addtTask(title) {
        this.tasks.push({title, done:false});
    }

    markDone(index) {
        if (index >=0 && index <this.tasks.length) {
            this.tasks[index].done = true;
        }
    }


    removeTask(index) {
        if (index >=0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }
}


  