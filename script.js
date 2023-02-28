// Selectors
const todoList = document.querySelector(".task-list");
const filterOption = document.querySelector("#filter");
const form = document.querySelector(".form");
const taskInput = document.querySelector("#newItem");

// Functions
const markDone = (todoLi) => {
  todoLi.classList.toggle("done");
};

const removeTask = (todoLi) => {
  todoLi.classList.add("fall");
  todoLi.addEventListener("transitionend", () => todoLi.remove());
};

const filterTasks = (hideCompletedTasks) => {
  todoList.querySelectorAll("li").forEach((todoLi) => {
    if (todoLi.classList.contains("done")) {
      todoLi.style.display = hideCompletedTasks ? "none" : "flex";
    }
  });
};

const addTask = (taskLabel) => {
  const todoLi = document.createElement("li");

  const labelSpan = document.createElement("span");
  labelSpan.className = "label";
  labelSpan.textContent = taskLabel;
  todoLi.appendChild(labelSpan);

  const divActions = document.createElement("div");
  divActions.className = "actions";
  divActions.innerHTML = `<input type="checkbox" class="btn-action btn-action-done" />
            <button class="btn-action btn-action-delete">❌</button>`;
  todoLi.appendChild(divActions);

  todoList.appendChild(todoLi);
};

// Event Listeners
todoList.addEventListener("click", (e) => {
  const todoLi = e.target;
  if (todoLi.classList[1] === "btn-action-done") {
    markDone(todoLi.parentNode.parentNode);
  } else if (todoLi.classList[1] === "btn-action-delete") {
    removeTask(todoLi.parentNode.parentNode);
  }
});

filterOption.addEventListener("click", (e) => {
  filterTasks(e.target.checked);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskLabel = taskInput.value.trim();
  if (taskLabel) {
    addTask(taskLabel);
    taskInput.value = "";
  }
});
