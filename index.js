console.log('funguje');

let currentPlayer = 'circle';

// const ctverecek1 = document.querySelector('button:nth-child(1)').addEventListener('click', addClass);
// const ctverecek2 = document.querySelector('button:nth-child(2)').addEventListener('click', addClass);
// const ctverecek3 = document.querySelector('button:nth-child(3)').addEventListener('click', addClass);
// const ctverecek4 = document.querySelector('button:nth-child(4)').addEventListener('click', addClass);
// const ctverecek5 = document.querySelector('button:nth-child(5)').addEventListener('click', addClass);
// const ctverecek6 = document.querySelector('button:nth-child(6)').addEventListener('click', addClass);
// const ctverecek7 = document.querySelector('button:nth-child(7)').addEventListener('click', addClass);
// const ctverecek8 = document.querySelector('button:nth-child(8)').addEventListener('click', addClass);
// const ctverecek9 = document.querySelector('button:nth-child(9)').addEventListener('click', addClass);
// const ctverecek10 = document.querySelector('button:nth-child(10)').addEventListener('click', addClass);

const addClass = (event) => {
  // const tlacitko = document.querySelector('button');
  event.target.classList.add('board__field--circle');
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
