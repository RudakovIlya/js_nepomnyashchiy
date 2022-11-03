const block = document.querySelector('#block');

const block2 = block.querySelector('#todo');

const x = 1

block2.insertAdjacentHTML('afterbegin',`
  <h2>Text</h2>
  <p>${x}</p>
`)

console.log(block2.closest('#block'))
