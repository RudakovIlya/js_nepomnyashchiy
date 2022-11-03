const list = document.querySelector('#todos');
const button = document.querySelector('button');

button.addEventListener('click', handleClick);
document.addEventListener('DOMContentLoaded', loadTodos);

function handleClick() {

  const newTodo = this.previousElementSibling.value.trim(); // Получаем значение инпута.

  if (newTodo) {
    createTodo(newTodo);
    saveToStorage(newTodo);
    this.previousElementSibling.value = '';
  } else {
    alert('input field is empty');
  }
}

function saveToStorage(todo) {
  const todos = JSON.parse(localStorage.getItem('tasks')) || [];

  localStorage.setItem('tasks', JSON.stringify([...todos, todo]));
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('tasks'));
  if(todos) {
    todos.forEach(todo => createTodo(todo));
  }
}

function createTodo(text) {

  const li = document.createElement('li');

  li.textContent = text;

  li.classList.add('todo__item');

  li.addEventListener('click', deleteTodo)

  list.append(li);

}

function removeFromStorage(removedTodo) {
  const todos = JSON.parse(localStorage.getItem('tasks')) || [];

  localStorage.setItem(
    'tasks',
    JSON.stringify(todos.filter((todo) => todo !== removedTodo))
  );
}

function deleteTodo() {
  this.removeEventListener('click', deleteTodo);
  removeFromStorage(this.innerText)
  this.remove();
}

