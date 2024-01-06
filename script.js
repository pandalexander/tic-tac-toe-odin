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

const clearBoard = function () {
  gameBoard.boardMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
};

const checkForWin = function () {
  const topLeft = gameBoard.boardMatrix[0][0];
  const topMiddle = gameBoard.boardMatrix[0][1];
  const topRight = gameBoard.boardMatrix[0][2];
  const left = gameBoard.boardMatrix[1][0];
  const middle = gameBoard.boardMatrix[1][1];
  const right = gameBoard.boardMatrix[1][2];
  const bottomLeft = gameBoard.boardMatrix[2][0];
  const bottomMiddle = gameBoard.boardMatrix[2][1];
  const bottomRight = gameBoard.boardMatrix[2][2];

  // Row Wins
  if (topLeft === topMiddle && topMiddle === topRight) {
    if (topLeft === "X") {
      console.log("Player One Wins!");
    }
    if (topLeft === "O") {
      console.log("Player Two Wins!");
    }
  }

  if (left === middle && middle === right) {
    if (left === "X") {
      console.log("Player One Wins!");
    }
    if (left === "O") {
      console.log("Player Two Wins!");
    }
  }

  if (bottomLeft === bottomMiddle && bottomMiddle === bottomRight) {
    if (bottomLeft === "X") {
      console.log("Player One Wins!");
    }
    if (bottomLeft === "O") {
      console.log("Player Two Wins!");
    }
  }

  // Column Wins
  if (topLeft === left && left === bottomLeft) {
    if (topLeft === "X") {
      console.log("Player One Wins!");
    }
    if (topLeft === "O") {
      console.log("Player Two Wins!");
    }
  }

  if (topMiddle === middle && middle === bottomMiddle) {
    if (topMiddle === "X") {
      console.log("Player One Wins!");
    }
    if (topMiddle === "O") {
      console.log("Player Two Wins!");
    }
  }

  if (topRight === right && right === bottomRight) {
    if (topRight === "X") {
      console.log("Player One Wins!");
    }
    if (topRight === "O") {
      console.log("Player Two Wins!");
    }
  }

  // Diagonal Wins
  if (topLeft === middle && middle === bottomRight) {
    if (topLeft === "X") {
      console.log("Player One Wins!");
    }
    if (topLeft === "O") {
      console.log("Player Two Wins!");
    }
  }
  if (topRight === middle && middle === bottomLeft) {
    if (topRight === "X") {
      console.log("Player One Wins!");
    }
    if (topRight === "O") {
      console.log("Player Two Wins!");
    }
  }
};
