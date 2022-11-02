const buttons = document.querySelectorAll('button');

buttons.forEach(item =>  item.addEventListener('click', handleClick))

function handleClick(event) {
  const btn = event.target;

  btn.dataset.clicked = +btn.dataset.clicked + 1;

  this.textContent =  btn.dataset.clicked;
}
