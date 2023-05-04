import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

//ADD CLASS FOR BUTTONS
let currentPlayer = 'circle';

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    document.querySelector('#player').classList.remove('circle');
    document.querySelector('#player').classList.add('cross');
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
  } else if (currentPlayer === 'cross') {
    currentPlayer = 'circle';
    document.querySelector('#player').classList.remove('cross');
    document.querySelector('#player').classList.add('circle');
    event.target.classList.add('board__field--cross')
    event.target.disabled = true;
  }

  //ARRAY
  const buttons = document.querySelectorAll('button');
  const buttonsArray = Array.from(buttons);
  const herniPole = buttonsArray.map((button) => {
    if (button.classList.contains('board__field--cross')) {
      return 'x';
    } else if (button.classList.contains('board__field--circle')) {
      return 'o';
    } else {
      return '_';
    }
  });

  //FETCH
  const fields = document.querySelectorAll('button')
  fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify({
    board: herniPole,
    player: 'x', // Hledá tah pro křížek.
  }),
})
  .then((response) => response.json())
  .then((data) => {
    if(currentPlayer === 'cross'){
    const { x, y } = data.position // x bude 0 a y bude 1, protože to je jediné volné políčko. x 0 odpovídá prvnímu sloupci a y 1 druhému řádku.
    const field = fields[x + y * 10] // Najde políčko na příslušné pozici.
    field.click() // Simulace kliknutí.
  }
  })

  //WINNER
  const vitez = findWinner(herniPole);
  if (vitez === 'o') {
    setTimeout(function () {
      alert('Vyhrál jsi!');
      location.reload();
    }, 100);
  } else if (vitez === 'x') {
    setTimeout(function () {
      alert('Vyhrál křížek!');
      location.reload();
    }, 100);
  } else if (vitez === 'tie') {
    setTimeout(function () {
      alert('Hra skončila nerozhodná.');
      location.reload();
    }, 100);
  }
};

//USE "addclass" FUNCTION FOR ALL BUTTONS
document.querySelectorAll('button').forEach((oneButton) => {
  oneButton.addEventListener('click', addClass);
});

//RESTART
const restart = (event) => {
  const prompt = confirm('Opravdu chcete začít znovu?');

  if (prompt === false) {
    event.preventDefault();
  }
};
const buttonRestart = document.querySelector('.restart');
buttonRestart.addEventListener('click', restart);

