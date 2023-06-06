const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
let xwin = document.getElementById('xwin');
let owin = document.getElementById('owin');
let xlos = document.getElementById('xlos');
let olos = document.getElementById('olos');
let nowinner = document.getElementById('nowin');
function handleSquareClick(event) {
  const square = event.target;
  if (square.textContent !== '') {
    return;
  }
  square.textContent = currentPlayer;
  if (checkForWinner()) {
    // alert(`${currentPlayer} wins!`);
    if (currentPlayer == 'X') {
      xwin.style.display = "block";
      olos.style.display = "block";
    }
    else if (currentPlayer == 'O') {
      owin.style.display = "block";
      xlos.style.display = "block";
    }


  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  }
  
}

function checkForWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a].textContent !== '' && squares[a].textContent === squares[b].textContent && squares[b].textContent === squares[c].textContent) {
      return true;
      
    }
  }
  
  
  return false;
}

squares.forEach(square => {
  square.addEventListener('click', handleSquareClick);
});
