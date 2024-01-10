// Build GameBoard Object

const gameBoard = (function () {
  const boardMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return {
    boardMatrix,
  };
})();

const createPlayer = (name, symbol, active) => {
  return { name, symbol, active };
};

const playerOne = createPlayer("playerOne", "X", true);
const playerTwo = createPlayer("playerTwo", "O", false);

const markSpace = (function () {
  const mark = (player, row, col) => {
    if (
      typeof gameBoard.boardMatrix[row][col] === "number" &&
      player.active === true
    ) {
      gameBoard.boardMatrix[row][col] = player.symbol;
    }
  };

  const topLeft = (player) => mark(player, 0, 0);
  const topMiddle = (player) => mark(player, 0, 1);
  const topRight = (player) => mark(player, 0, 2);
  const left = (player) => mark(player, 1, 0);
  const middle = (player) => mark(player, 1, 1);
  const right = (player) => mark(player, 1, 2);
  const bottomLeft = (player) => mark(player, 2, 0);
  const bottomMiddle = (player) => mark(player, 2, 1);
  const bottomRight = (player) => mark(player, 2, 2);

  return {
    topLeft,
    topMiddle,
    topRight,
    left,
    middle,
    right,
    bottomLeft,
    bottomMiddle,
    bottomRight,
  };
})();

const displayBoard = function () {
  console.table(gameBoard.boardMatrix);
};

const clearBoard = function () {
  gameBoard.boardMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
};

const checkForWin = function () {
  const b = gameBoard.boardMatrix; // Shorten variable name

  const checkWinner = (a, b, c) => {
    // Function to check for a winner in a line
    if (a === b && b === c) {
      if (a === "X") {
        console.log("Player One Wins!");
      }
      if (a === "O") {
        console.log("Player Two Wins!");
      }
    }
  };

  // Check rows, columns, and diagonals for wins
  for (let i = 0; i < 3; i++) {
    checkWinner(b[i][0], b[i][1], b[i][2]); // Rows
    checkWinner(b[0][i], b[1][i], b[2][i]); // Columns
  }

  // Diagonals
  checkWinner(b[0][0], b[1][1], b[2][2]);
  checkWinner(b[0][2], b[1][1], b[2][0]);
};

function changeActivePlayer() {
  function countNumbers(matrix) {
    let count = 0;

    // Iterate through each row of the matrix
    for (let i = 0; i < matrix.length; i++) {
      // Iterate through each element in the row
      for (let j = 0; j < matrix[i].length; j++) {
        // Check if the element is a number
        if (typeof matrix[i][j] === "number") {
          count++;
        }
      }
    }
    return count;
  }

  let numberCount = countNumbers(gameBoard.boardMatrix);
  if (numberCount % 2) {
    playerOne.active = true;
    playerTwo.active = false;
  } else {
    playerOne.active = false;
    playerTwo.active = true;
  }
  console.log(numberCount);
  console.log(playerOne.active);
  console.log(playerTwo.active);
}
