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

const displayBoard = function () {
  console.table(gameBoard.boardMatrix);
};

const clearBoard = function () {
  gameBoard.boardMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  playerOne.hasWon = false;
  playerTwo.hasWon = false;
};

const createPlayer = (name, symbol, active, hasWon) => {
  return { name, symbol, active, hasWon };
};

const playerOne = createPlayer("playerOne", "X", true, false);
const playerTwo = createPlayer("playerTwo", "O", false, false);

// const markSpace = (function () {
//   const mark = (player, row, col) => {
//     if (
//       typeof gameBoard.boardMatrix[row][col] === "number" &&
//       player.active === true
//     ) {
//       gameBoard.boardMatrix[row][col] = player.symbol;
//     }
//   };

//   const topLeft = (player) => mark(player, 0, 0);
//   const topMiddle = (player) => mark(player, 0, 1);
//   const topRight = (player) => mark(player, 0, 2);
//   const left = (player) => mark(player, 1, 0);
//   const middle = (player) => mark(player, 1, 1);
//   const right = (player) => mark(player, 1, 2);
//   const bottomLeft = (player) => mark(player, 2, 0);
//   const bottomMiddle = (player) => mark(player, 2, 1);
//   const bottomRight = (player) => mark(player, 2, 2);

  return {
    mark,
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

const checkForWin = function () {
  const b = gameBoard.boardMatrix; // Shorten variable name

  if (b.filter((element) => typeof element === "number").length === 0) {
    console.log("It's a tie!");
  }

  const checkWinner = (a, b, c) => {
    // Function to check for a winner in a line
    if (a === b && b === c) {
      if (a === "X") {
        playerOne.hasWon = true;
        playerTwo.hasWon = false;
        console.log("Player One Wins!");
      } else if (a === "O") {
        playerOne.hasWon = false;
        playerTwo.hasWon = true;
        console.log("Player Two Wins!");
      }
    }
  };

  const checkTie = () => {
    if (
      b.flat().filter((element) => typeof element === "number").length === 0 &&
      playerOne.hasWon === false &&
      playerTwo.hasWon === false
    ) {
      console.log("It's a tie!");
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

  // Tie game
  checkTie();
};

function changeActivePlayer() {
  const countNumbers = (matrix) => {
    return matrix.flat().filter((element) => typeof element === "number")
      .length;
  };

  const numberCount = countNumbers(gameBoard.boardMatrix);
  playerOne.active = numberCount % 2 === 1;
  playerTwo.active = numberCount % 2 === 0;
}

const gameController = (function () {
  const mark = function (player, row, col) {
    if (
      typeof gameBoard.boardMatrix[row][col] === "number" &&
      player.active === true
    ) {
      gameBoard.boardMatrix[row][col] = player.symbol;
    }
  };

  const turn = function (row, col) {
    if (playerOne.active) {
      player = playerOne;
    } else if (playerTwo.active) {
      player = playerTwo;
    }
    mark(player, row, col);
    displayBoard();
    checkForWin();
    changeActivePlayer();
  };
  return { turn };
})();
