let addBtn = document.querySelector("#add-Btn");
let cancelBtn = document.querySelector("#cancelBtn");
let form = document.querySelector("form");
let board = document.querySelector("#board");
let input = document.querySelector("#input");
let statusSelected = document.querySelector("#status");

let dragedTaskId = null;

// +ADD button
addBtn.addEventListener("click", () => {
  form.style.display = "block";
  board.style.display = "none";
});

// Cancel button
cancelBtn.addEventListener("click", () => {
  board.style.display = "block";
  form.style.display = "none";
});

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  const pendingColumn = document.querySelector("#pending-column");

  const progressColumn = document.querySelector("#progress-column");

  const completedColumn = document.querySelector("#completed-column");

  pendingColumn.innerHTML = "";
  progressColumn.innerHTML = "";
  completedColumn.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("div");

    card.dataset.id = task.id;

    card.draggable = true;

    card.addEventListener("dragstart", () => {
      dragedTaskId = task.id;
    });

    card.classList.add("task-card");
    
    card.innerHTML=
    `
      <p>${task.task}</p>
      <div>
      <button class="btn btn-primary text-white">Delete</button>
      <button class="btn btn-info text-white"> Edit </button>
      </div>
         `;

    if (task.status === "Pending") {
      card.classList.add("bg-danger");

      pendingColumn.appendChild(card);
    } else if (task.status === "In Progress") {
      card.classList.add("bg-warning");

      progressColumn.appendChild(card);
    } else {
      card.classList.add("bg-success");

      completedColumn.appendChild(card);
    }
  });
}

const columns = document.querySelectorAll("[data-status]");

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", () => {
    const task = tasks.find((task) => task.id == dragedTaskId);

    task.status = column.dataset.status;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
  });

  render();
});

// Add Task function
function addTask() {
  if (input.value.trim() === "") {
    alert("please enter value");
    return;
  }

  if (statusSelected.selectedIndex === 0) {
    alert("please select status ");
    return;
  }

  const taskObj = {
    id: Date.now(),
    task: input.value,
    status: statusSelected.value,
  };
  tasks.push(taskObj);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  render();

  input.value = "";
  statusSelected.selectedIndex = 0;

  form.style.display = "none";
  board.style.display = "block";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});



render();


let deleteBtn=document.querySelectorAll(".deleteBtn");

deleteBtn.addEventListener("click",()=>{
  console.log("Delete button is cliked");
});










