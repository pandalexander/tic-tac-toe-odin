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
  function createPlayer(name, value, symbol) {
    return { name, value, symbol };
  }

  // Create Player One and Player Two with different values and symbols
  const playerOne = createPlayer("Player One", 1, "X");
  const playerTwo = createPlayer("Player Two", 2, "O");

  // Store players in an array for easy access
  const players = [playerOne, playerTwo];

  // Set the initial active player to Player One
  let activePlayer = players[0];

  // Function to switch the active player after each turn
  const switchActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  // Function to get the currently active player
  const getActivePlayer = () => activePlayer;

  // Function to print the current game board and active player's turn
  const printNewTurn = () => {
    Gameboard.printBoard();
    console.log(`It is ${getActivePlayer().name}'s turn!`);
  };

  // Function to play a turn, mark a cell, switch player, and print the new turn
  const playTurn = (row, column) => {
    // Stops working if space has already been marked
    if (!Gameboard.getBoard()[row][column].getValue()) {
      console.log(
        `${
          getActivePlayer().name
        } marked the square located at row ${row} and column ${column}.`
      );
      Gameboard.markCell(row, column, getActivePlayer().value);
      switchActivePlayer();
      printNewTurn();
    }
  };

  // Initial print of the game board and active player's turn
  printNewTurn();

  // Return public methods for external use
  return { playTurn, getActivePlayer };
})();
