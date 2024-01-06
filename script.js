// Build GameBoard Object

const gameBoard = (function () {
  const boardMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return { boardMatrix };
})();

console.log(gameBoard.boardMatrix);
