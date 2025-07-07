const form = document.getElementById("todo-form");
const input = document.getElementById("new-task");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo, i) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.done) li.classList.add("done");
    li.addEventListener("click", () => {
      todos[i].done = !todos[i].done;
      save();
      render();
    });
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({ text: input.value, done: false });
  input.value = "";
  save();
  render();
});

render();