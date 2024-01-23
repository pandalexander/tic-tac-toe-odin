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
    console.log(boardWithValues);
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

// Create player objects with player 1 having mark = 1, player 2 having mark = 2

// GameController
// Create Players

// (put players inside array called players)

// Make Active Player variable that makes player one active. Make  switch active player function that, when initiated, makes the active player the opposite of whatever the active player currently is.

// get active player function

// print new turn function that prints current state of board and console message

// play turn function (location) that logs a message that is player specific and location specific, make the active player's mark on that space, switch active player, and prints a new turn

// print initial new turn
