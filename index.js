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

  //ARRAY
  const buttons = document.querySelectorAll('button');
  // const buttonsArray = Array.from(buttons);
  const herniPole = buttons.map((button) => {
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
  } else if (vitez === 'x') {
    alert('Vyhrál křížek!');
  } else if (vitez === 'tie') {
    alert('Je to remíza!');
  }
};
document.querySelectorAll('button').forEach((oneButton) => {
  oneButton.addEventListener('click', addClass);
});

const restart = (event) => {
  const prompt = confirm('Opravdu chcete začít znovu?');

  if (prompt === false) {
    event.preventDefault();
  }
};
const buttonRestart = document.querySelector('.restart');
buttonRestart.addEventListener('click', restart);
