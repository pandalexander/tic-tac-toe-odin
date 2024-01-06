// Build GameBoard Object

const gameBoard = (function () {
  const boardMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return { boardMatrix };
})();

console.table(gameBoard.boardMatrix);

const playerOne = (function () {
  const name = "Player One";
  const symbol = "X";
  return { name, symbol };
})();

const playerTwo = (function () {
  const name = "Player Two";
  const symbol = "O";
  return { name, symbol };
})();
