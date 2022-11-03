const list = document.querySelector('#todos');
const button = document.querySelector('button');

button.addEventListener('click', handleClick);

function handleClick() {

  const newTodo = this.previousElementSibling.value.trim(); // Получаем значение инпута.

  if (newTodo) {
    createTodo(newTodo);
  } else {
    alert('input field is empty');
  }
}

function createTodo(text) {

  const li = document.createElement('li');

  li.textContent = text;

  li.classList.add('todo__item');

  li.addEventListener('click', deleteTodo)

  list.append(li);

}

function deleteTodo() {
  this.removeEventListener('click', deleteTodo);
  this.remove();
}

