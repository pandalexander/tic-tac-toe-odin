// Build GameBoard Object

const gameBoard = (function () {
  const boardMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return { boardMatrix };
})();

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

const markSpace = (function () {
  const topLeft = (symbol) => {
    if (typeof gameBoard.boardMatrix[0][0] === "number") {
      gameBoard.boardMatrix[0][0] = symbol;
    }
  };

  const topMiddle = (symbol) => {
    if (typeof gameBoard.boardMatrix[0][1] === "number") {
      gameBoard.boardMatrix[0][1] = symbol;
    }
  };

  const topRight = (symbol) => {
    if (typeof gameBoard.boardMatrix[0][2] === "number") {
      gameBoard.boardMatrix[0][2] = symbol;
    }
  };

  const left = (symbol) => {
    if (typeof gameBoard.boardMatrix[1][0] === "number") {
      gameBoard.boardMatrix[1][0] = symbol;
    }
  };

  const middle = (symbol) => {
    if (typeof gameBoard.boardMatrix[1][1] === "number") {
      gameBoard.boardMatrix[1][1] = symbol;
    }
  };

  const right = (symbol) => {
    if (typeof gameBoard.boardMatrix[1][2] === "number") {
      gameBoard.boardMatrix[1][2] = symbol;
    }
  };

  const bottomLeft = (symbol) => {
    if (typeof gameBoard.boardMatrix[2][0] === "number") {
      gameBoard.boardMatrix[2][0] = symbol;
    }
  };

  const bottomMiddle = (symbol) => {
    if (typeof gameBoard.boardMatrix[2][1] === "number") {
      gameBoard.boardMatrix[2][1] = symbol;
    }
  };

  const bottomRight = (symbol) => {
    if (typeof gameBoard.boardMatrix[2][2] === "number") {
      gameBoard.boardMatrix[2][2] = symbol;
    }
  };

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
