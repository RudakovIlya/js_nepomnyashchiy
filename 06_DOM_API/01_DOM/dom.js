const accordions = document.getElementsByClassName('accordion');

for(const btn of accordions) {
  btn.addEventListener('click', () => {
    const nextElem = btn.nextElementSibling;
    nextElem.classList.toggle('show');
  })
}
