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


//   User Interface Logic

const todo = new ToDoList();
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const title = taskInput.value.trim();
    if (title) {
        todo.addtTask(title);
        taskInput.value = "";
        render();
    }
});


function render() {
    taskList.innerHTML = "";
    todo.tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        if (task.done) li.classList.add("done");

        const actions = document.createElement("div");

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "v"
        doneBtn.onClick = () => {
            todo.markDone(index);
            render();
        };


        const removeBtn = document.createElement("button");
        removeBtn.textContent = "#";
        removeBtn.onclick = () => {
            todo.removeTask(index);
            render();
        };

        actions.append(doneBtn, removeBtn);
        li.appendChild(actions);
        taskList.appendChild(li);
    });
}

render();
