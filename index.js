import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const restart = (event) => {
  const prompt = confirm('Opravdu chcete začít znovu?');

  if (prompt === false) {
    event.preventDefault();
  }
};
const buttonRestart = document.querySelector('.restart');
buttonRestart.addEventListener('click', restart);

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

const buttons = document.querySelectorAll('button');
let pole = Array.from(buttons);
let herniPole = pole.map((button) => {
  if (button.classList.contains('.boar__field--cross')) {
    return 'x';
  } else if (button.classList.contains('.boar__field--circle')) {
    return 'o';
  } else return '_';
});
console.log(herniPole);
// const pomocna = () => {
//   if (findWinner(pole) === 'x') return alert('Vyhrál hráč s křížky');
//   if (findWinner(pole) === 'o') return alert('Vyhrál hráč s kolečky');
//   // if (findWinner(pole) === 'tie') return 'Hra skončila remízou';
//   // if (findWinner(pole) === null)
//   //   return 'Hra ještě neskončila, zatím nikdo nevyhrál';
// };
// console.log(pomocna());

//původní kód pro nasazení funkce pouze pro první řádek
// document
//   .querySelector('button:nth-child(1)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(2)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(3)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(4)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(5)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(6)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(7)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(8)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(9)')
//   .addEventListener('click', addClass);

// document
//   .querySelector('button:nth-child(10)')
//   .addEventListener('click', addClass);
