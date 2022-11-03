const modal = document.querySelector('#myModal');
const modalButton = document.querySelector('#myBtn');

modalButton.addEventListener('click', showModal)

function showModal () {
  modal.classList.add('show');

  attachModalEvents();
}


function attachModalEvents() {
  modal.querySelector('.close').addEventListener('click', closeModal);
  document.addEventListener('keydown',handleEscape);
  modal.addEventListener('click',handleOutSide);
}

function handleEscape(event) {
  const eventKey = event.key;
  if(eventKey === 'Escape') {
    closeModal();
  }
}

function handleOutSide (event) {
  const targetElement = event.target.closest('.modal-content');
  if(!targetElement) {
    closeModal();
  }
}

function closeModal () {
  modal.classList.remove('show');
  detachModalEvents();
}

function detachModalEvents () {
  document.removeEventListener('keydown', handleEscape);
  modal.querySelector('.close').removeEventListener('click', closeModal);
  modal.removeEventListener('click',handleOutSide);
}
