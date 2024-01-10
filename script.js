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
  const topLeft = boardMatrix[0][0];
  const topMiddle = boardMatrix[0][1];
  const topRight = boardMatrix[0][2];
  const left = boardMatrix[1][0];
  const middle = boardMatrix[1][1];
  const right = boardMatrix[1][2];
  const bottomLeft = boardMatrix[2][0];
  const bottomMiddle = boardMatrix[2][1];
  const bottomRight = boardMatrix[2][2];

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
