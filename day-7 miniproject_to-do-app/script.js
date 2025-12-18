let tasks = [];
let currentFilter = "all";

/* Add Task */
function addTask() {
    const input = document.getElementById("taskInput");
    const error = document.getElementById("error");

    if (input.value.trim() === "") {
        error.innerText = "Task cannot be empty!";
        return;
    }

    error.innerText = "";

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    renderTasks();
}

/* Render Tasks */
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (currentFilter === "completed") return task.completed;
        if (currentFilter === "pending") return !task.completed;
        return true;
    });

    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const span = document.createElement("span");
        span.innerText = task.text;
        if (task.completed) span.classList.add("completed");
        span.onclick = () => toggleComplete(index);

        const btnGroup = document.createElement("div");

        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-sm btn-warning me-1";
        editBtn.innerText = "Edit";
        editBtn.onclick = () => editTask(index);

        const delBtn = document.createElement("button");
        delBtn.className = "btn btn-sm btn-danger";
        delBtn.innerText = "Delete";
        delBtn.onclick = () => deleteTask(index);

        btnGroup.append(editBtn, delBtn);
        li.append(span, btnGroup);
        list.appendChild(li);
    });

    updateCounter();
}

/* Delete Task */
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

/* Edit Task */
function editTask(index) {
    const updated = prompt("Edit task", tasks[index].text);
    if (updated !== null && updated.trim() !== "") {
        tasks[index].text = updated;
        renderTasks();
    }
}

/* Toggle Completed */
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

/* Counter */
function updateCounter() {
    document.getElementById("totalCount").innerText = tasks.length;
    document.getElementById("completedCount").innerText =
        tasks.filter(task => task.completed).length;
}

/* Filter Tasks */
function filterTasks(type) {
    currentFilter = type;
    renderTasks();
}

/* Theme Toggle */
function toggleTheme() {
    document.body.classList.toggle("dark");
}
