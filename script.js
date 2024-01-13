const narrator = document.getElementById("narrator");
const boardContainer = document.getElementById("board-container");
const topLeft = document.getElementById("top-left");
const topMiddle = document.getElementById("top-middle");
const topRight = document.getElementById("top-right");
const left = document.getElementById("left");
const middle = document.getElementById("middle");
const right = document.getElementById("right");
const bottomLeft = document.getElementById("bottom-left");
const bottomMiddle = document.getElementById("bottom-middle");
const bottomRight = document.getElementById("bottom-right");

// Game board module with a matrix to represent the Tic Tac Toe board
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

// Function to display the current state of the game board
const displayBoard = function () {
  console.table(gameBoard.boardMatrix);

  // Update DOM
  for (x = 0; x < gameBoard.boardMatrix.length; x++) {
    for (y = 0; y < gameBoard.boardMatrix[x].length; y++) {
      if (typeof gameBoard.boardMatrix[x][y] === "string") {
        if (x === 0 && y === 0) {
          topLeft.textContent = gameBoard.boardMatrix[x][y];
        }
        if (x === 0 && y === 1) {
          topMiddle.textContent = gameBoard.boardMatrix[x][y];
        }
        if (x === 0 && y === 2) {
          topRight.textContent = gameBoard.boardMatrix[x][y];
        }
        if (x === 1 && y === 0) {
          left.textContent = gameBoard.boardMatrix[x][y];
        }
        if (x === 1 && y === 1) {
          middle.textContent = gameBoard.boardMatrix[x][y];
        }
        if (x === 1 && y === 2) {
          right.textContent = gameBoard.boardMatrix[x][y];
        }
        if (x === 2 && y === 0) {
          bottomLeft.textContent = gameBoard.boardMatrix[x][y];
        }
        if (x === 2 && y === 1) {
          bottomMiddle.textContent = gameBoard.boardMatrix[x][y];
        }
        if (x === 2 && y === 2) {
          bottomRight.textContent = gameBoard.boardMatrix[x][y];
        }
      }
    }
  }
};

// Function to clear the game board and reset player statuses
const clearBoard = function () {
  gameBoard.boardMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
};

// Factory function to create a player object with specified properties
const createPlayer = (name, symbol, active, hasWon) => {
  return { name, symbol, active, hasWon };
};

// Creating playerOne and playerTwo objects
const playerOne = createPlayer("playerOne", "X", true, false);
const playerTwo = createPlayer("playerTwo", "O", false, false);

// Function to check for a win or a tie on the game board
const checkForWin = function () {
  const b = gameBoard.boardMatrix; // Shorten variable name

  const checkWinner = (a, b, c) => {
    // Function to check for a winner in a line
    if (a === b && b === c) {
      if (a === "X") {
        playerOne.hasWon = true;
        playerTwo.hasWon = false;
        console.log("Player One Wins!");
        clearBoard();
      } else if (a === "O") {
        playerOne.hasWon = false;
        playerTwo.hasWon = true;
        console.log("Player Two Wins!");
        clearBoard();
      }
    }
  };

  // Function to check for a tie
  const checkTie = () => {
    if (
      b.flat().filter((element) => typeof element === "number").length === 0 &&
      playerOne.hasWon === false &&
      playerTwo.hasWon === false
    ) {
      console.log("It's a tie!");
      clearBoard();
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

  // Check for a tie game
  checkTie();
};

// Function to change the active player based on the number of remaining empty spaces
function changeActivePlayer() {
  const countNumbers = (matrix) => {
    return matrix.flat().filter((element) => typeof element === "number")
      .length;
  };

  const numberCount = countNumbers(gameBoard.boardMatrix);
  playerOne.active = numberCount % 2 === 1;
  playerTwo.active = numberCount % 2 === 0;
}

// Game controller module with functions for user and computer turns
const gameController = (function () {
  // Function to mark a cell on the game board based on the current player's symbol
  const mark = function (player, row, col) {
    if (
      typeof gameBoard.boardMatrix[row][col] === "number" &&
      player.active === true
    ) {
      gameBoard.boardMatrix[row][col] = player.symbol;
    }
  };
  // Function for the user's turn
  const userTurn = function (row, col) {
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

  // Function for the computer's turn
  const computerTurn = function () {
    if (playerOne.active) {
      player = playerOne;
    } else if (playerTwo.active) {
      player = playerTwo;
    }

    let currentLength = gameBoard.boardMatrix
      .flat()
      .filter((element) => typeof element === "number").length;

    // Function to get a random empty space on the board
    function getRandomSpace() {
      return Math.floor(Math.random() * 3);
    }

    // Computer's turn loop
    do {
      mark(player, getRandomSpace(), getRandomSpace());
      displayBoard();
      checkForWin();
      changeActivePlayer();
    } while (
      currentLength ===
      gameBoard.boardMatrix
        .flat()
        .filter((element) => typeof element === "number").length
    );
  };
  return { userTurn, computerTurn };
})();

// DOM MANIPULATION TIME!

topLeft.addEventListener("click", function (e) {
  gameController.userTurn(0, 0);
});

topMiddle.addEventListener("click", function (e) {
  gameController.userTurn(0, 1);
});

topRight.addEventListener("click", function (e) {
  gameController.userTurn(0, 2);
});

left.addEventListener("click", function (e) {
  gameController.userTurn(1, 0);
});

middle.addEventListener("click", function (e) {
  gameController.userTurn(1, 1);
});

right.addEventListener("click", function (e) {
  gameController.userTurn(1, 2);
});

bottomLeft.addEventListener("click", function (e) {
  gameController.userTurn(2, 0);
});

bottomMiddle.addEventListener("click", function (e) {
  gameController.userTurn(2, 1);
});

bottomRight.addEventListener("click", function (e) {
  gameController.userTurn(2, 2);
});
