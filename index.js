console.log('funguje');

let currentPlayer = 'circle';

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    document.querySelector('#player').classList.remove('circle');
    document.querySelector('#player').classList.add('cross');
    event.target.disabled = true;
    return event.target.classList.add('board__field--circle');
  }

  if (currentPlayer === 'cross') {
    currentPlayer = 'circle';
    document.querySelector('#player').classList.remove('cross');
    document.querySelector('#player').classList.add('circle');
    event.target.disabled = true;
    return event.target.classList.add('board__field--cross');
  }
};
document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', addClass);

document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', addClass);
