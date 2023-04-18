import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

//ADD EVENT LISTENER TO BUTTONS
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
buttons.forEach((oneButton) => {
  oneButton.addEventListener('click', addClass);
});

//ARRAY
let pole = Array.from(buttons);
let herniPole = pole.map((button) => {
  if (button.classList.contains('board__field--cross')) {
    return 'x';
  } else if (button.classList.contains('board__field--circle')) {
    return 'o';
  } else {
    return '_';
  }
});

//WINNER
const vitez = findWinner(herniPole);
if (vitez === 'o') {
  alert('Vyhrálo kolečko!');
  location.reload();
} else if (vitez === 'x') {
  alert('Vyhrál křížek!');
  location.reload();
} else if (vitez === 'tie') {
  alert('Je to remíza!');
}

// // const pomocna = () => {
// //   if (findWinner(pole) === 'x') return alert('Vyhrál hráč s křížky');
// //   if (findWinner(pole) === 'o') return alert('Vyhrál hráč s kolečky');
// //   // if (findWinner(pole) === 'tie') return 'Hra skončila remízou';
// // console.log(pomocna());

const restart = (event) => {
  const prompt = confirm('Opravdu chcete začít znovu?');

  if (prompt === false) {
    event.preventDefault();
  }
};
const buttonRestart = document.querySelector('.restart');
buttonRestart.addEventListener('click', restart);
