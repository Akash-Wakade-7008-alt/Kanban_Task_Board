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

    card.innerHTML = `
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
