const section = document.querySelector('section');
const div = document.querySelector('div');
const button = document.querySelector('button');

section.addEventListener('click', handleClick);
div.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);

function handleClick (e) {
  e.stopPropagation();
  console.log(e.target)
  console.log(e.currentTarget)
}
