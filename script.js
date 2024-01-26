// Gameboard module to manage the tic-tac-toe game state

const Gameboard = (function () {
  // Define the number of rows and columns on the game board
  const rows = 3;
  const columns = 3;

  // Initialize an empty 2D array to represent the game board
  const board = [];

  // Loop to create rows and columns and fill the board with Cell objects
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  // Function to get the current state of the game board
  const getBoard = () => board;

  // Function to mark a cell with a player's value (1 or 2)
  const markCell = (row, column, player) => {
    board[row][column].setCellValue(player);
  };

  // Function to print the current state of the game board with values
  const printBoard = () => {
    const boardWithValues = board.map((row) =>
      row.map((cell) => cell.getValue())
    );
    console.table(boardWithValues);
  };

  // Function to clear the entire game board
  const clearBoard = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        board[i][j].clearCell();
      }
    }
  };

  // Return the public methods for external use
  return { getBoard, markCell, printBoard, clearBoard };
})();

// Cell factory to represent individual cells on the game board
function Cell() {
  let value = 0;

  function setCellValue(player) {
    // Check if the cell is empty before setting the value
    if (!value) {
      value = player;
    }
  }

  // Function to get the current value of the cell
  function getValue() {
    return value;
  }

  // Function to clear the cell by resetting its value to 0
  function clearCell() {
    value = 0;
  }

  // Return the public methods for external use
  return { setCellValue, getValue, clearCell };
}

// IIFE to manage game control, player creation, and turns
const GameController = (function () {
  let isGameOver = false;
  const getGameOver = () => isGameOver;

  function createPlayer(name, value, symbol, score) {
    return { name, value, symbol, score };
  }

  // Create Player One and Player Two with different values and symbols
  const playerOne = createPlayer("Player One", 1, "X", 0);
  const playerTwo = createPlayer("Player Two", 2, "O", 0);

  // Store players in an array for easy access
  const players = [playerOne, playerTwo];

  // Set the initial active player to Player One
  let activePlayer = players[0];

  // Function to switch the active player after each turn
  const switchActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const makePlayerOneActive = () => {
    activePlayer = players[0];
  };

  // Function to get the currently active player
  const getActivePlayer = () => activePlayer;

  // Function to access private player score
  const getPlayerScores = () => {
    console.log(`${playerOne.name}'s score: ${playerOne.score}`);
    console.log(`${playerTwo.name}'s score: ${playerTwo.score}`);
  };

  // Function to print the current game board and active player's turn
  const printNewTurn = () => {
    if (!isGameOver) {
      Gameboard.printBoard();
      console.log(`It is ${getActivePlayer().name}'s turn!`);
    }
  };

  const checkForWin = () => {
    const boardWithValues = Gameboard.getBoard().map((row) =>
      row.map((cell) => cell.getValue())
    );

    const checkTie = () => {
      let zeroArray = boardWithValues.flat().filter((isZero) => isZero === 0);
      return !zeroArray.length;
    };

    const checkThrees = () => {
      for (let i = 0; i < 3; i++) {
        // check verticals
        if (
          boardWithValues[0][i] !== 0 &&
          boardWithValues[0][i] === boardWithValues[1][i] &&
          boardWithValues[1][i] === boardWithValues[2][i]
        ) {
          return boardWithValues[0][i];
        }

        // check horizontals
        if (
          boardWithValues[i][0] !== 0 &&
          boardWithValues[i][0] === boardWithValues[i][1] &&
          boardWithValues[i][1] === boardWithValues[i][2]
        ) {
          return boardWithValues[i][0];
        }
      }

      // Check Diagonals
      if (
        (boardWithValues[0][0] !== 0 &&
          boardWithValues[0][0] === boardWithValues[1][1] &&
          boardWithValues[1][1] === boardWithValues[2][2]) ||
        (boardWithValues[0][2] !== 0 &&
          boardWithValues[0][2] === boardWithValues[1][1] &&
          boardWithValues[1][1] === boardWithValues[2][0])
      ) {
        return boardWithValues[1][1]; // Return the player value (1 or 2) for three in a row
      }
    };

    const playerWins = () => {
      if (checkThrees() !== undefined) {
        let winningPlayer = checkThrees() === 1 ? playerOne : playerTwo;
        Gameboard.printBoard();
        console.log(`${winningPlayer.name} wins!`);
        winningPlayer.score++;
        isGameOver = true;
      } else if (checkThrees() === undefined && checkTie()) {
        Gameboard.printBoard();
        console.log("Cat's Game - No One Wins");
        makePlayerOneActive();
        isGameOver = true;
      }
    };
    playerWins();
  };

  // Function to play a turn, mark a cell, switch player, and print the new turn
  const playTurn = (row, column) => {
    // Stops working if space has already been marked or if game is over
    if (!isGameOver) {
      if (!Gameboard.getBoard()[row][column].getValue()) {
        console.log(
          `${
            getActivePlayer().name
          } marked the square located at row ${row} and column ${column}.`
        );
        Gameboard.markCell(row, column, getActivePlayer().value);
        switchActivePlayer();
        checkForWin();
        printNewTurn();
      }
    }
  };

  const newGame = () => {
    isGameOver = false;
    Gameboard.clearBoard();
    makePlayerOneActive();
    printNewTurn();
  };

  // Initial print of the game board and active player's turn
  printNewTurn();

  // Return public methods for external use
  return { playTurn, getActivePlayer, getPlayerScores, getGameOver, newGame };
})();

// const testPlayerOneWins = () => {
//   GameController.playTurn(0, 0); // Player 1
//   GameController.playTurn(1, 0); // Player 2
//   GameController.playTurn(0, 1); // Player 1
//   GameController.playTurn(1, 1); // Player 2
//   GameController.playTurn(0, 2); // Player 1
// };

// const testPlayerTwoWins = () => {
//   GameController.playTurn(0, 0); // Player 1
//   GameController.playTurn(1, 0); // Player 2
//   GameController.playTurn(0, 1); // Player 1
//   GameController.playTurn(1, 1); // Player 2
//   GameController.playTurn(2, 0); // Player 1
//   GameController.playTurn(1, 2); // Player 2
// };

// const testTieGame = () => {
//   GameController.playTurn(0, 0); // Player 1
//   GameController.playTurn(1, 1); // Player 2
//   GameController.playTurn(0, 1); // Player 1
//   GameController.playTurn(0, 2); // Player 2
//   GameController.playTurn(2, 0); // Player 1
//   GameController.playTurn(1, 0); // Player 2
//   GameController.playTurn(1, 2); // Player 1
//   GameController.playTurn(2, 1); // Player 2
//   GameController.playTurn(2, 2); // Player 1
// };
