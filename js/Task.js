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
