const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveToLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    li.addEventListener('click', () => {
      todos.splice(index, 1);
      saveToLocalStorage();
      renderTodos();
    });
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = input.value.trim();
  if (newTodo) {
    todos.push(newTodo);
    saveToLocalStorage();
    renderTodos();
    input.value = '';
  }
});

renderTodos();