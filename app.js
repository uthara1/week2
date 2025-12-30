// Week 2 Microproject - Terminal To-Do App

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = [];

function showMenu() {
  console.log("\n--- TO DO APP ---");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Delete Task");
  console.log("4. Exit");

  rl.question("Choose an option: ", handleInput);
}

function handleInput(choice) {
  switch (choice) {
    case "1":
      addTask();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      deleteTask();
      break;
    case "4":
      console.log("Exiting To-Do App 👋");
      rl.close();
      break;
    default:
      console.log("Invalid choice ❌");
      showMenu();
  }
}

function addTask() {
  rl.question("Enter task name: ", (task) => {
    todos.push(task);
    console.log(`Task added: ${task}`);
    showMenu();
  });
}

function viewTasks() {
  if (todos.length === 0) {
    console.log("No tasks available");
  } else {
    console.log("\nYour Tasks:");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  showMenu();
}

function deleteTask() {
  if (todos.length === 0) {
    console.log("No tasks to delete");
    showMenu();
    return;
  }

  rl.question("Enter task number to delete: ", (num) => {
    const index = parseInt(num) - 1;

    if (index >= 0 && index < todos.length) {
      const removed = todos.splice(index, 1);
      console.log(`Deleted task: ${removed[0]}`);
    } else {
      console.log("Invalid task number ❌");
    }
    showMenu();
  });
}

// Start the app
showMenu();