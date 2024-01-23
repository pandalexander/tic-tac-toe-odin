// Big Picture

// Create Gameboard, get board function, add mark function (Location, player), print board to console

const Gameboard = (function () {
  const rows = 3;
  const columns = 3;
  const board = [];

  return { board };
  console.log("yoooo");
})();

// Create Cell(); that creates an object where it is instantiated. Object should have a private value attribute and an add mark method that is called inside the Gameboard's mark function. In the add mark method, if current value is 1 or 2, stop execution. Also add function to get private value variable that will be called when printing board. (get all available markable places, mark only unavailable)

function Cell() {
  let value = 0;

  function markCell(player) {
    if (!value) {
      value = player;
    }
  }

  function getValue() {
    return value;
  }

  function clearCell() {
    value = 0;
  }

  return { markCell, getValue, clearCell };
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
