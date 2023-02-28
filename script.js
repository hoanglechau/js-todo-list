// Selectors
const todoList = document.querySelector(".task-list");
const filterOption = document.querySelector("#filter");
const form = document.querySelector(".form");
const taskInput = document.querySelector("#newItem");

// Functions
const markDone = (element) => {
  element.classList.toggle("done");
};

const removeTask = (element) => {
  element.classList.add("fall");
  element.addEventListener("transitionend", () => element.remove());
};

// Event Listeners
todoList.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList[1] === "btn-action-done") {
    markDone(element.parentNode.parentNode);
  } else if (element.classList[1] === "btn-action-delete") {
    removeTask(element.parentNode.parentNode);
  }
});

filterOption.addEventListener("click", (e) => {
  filterTasks(e.target.checked);
});
