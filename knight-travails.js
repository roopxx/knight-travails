class Game {
  constructor(value = 8) {
    this.value = value;
    this.board = this.generateBoard(value);
  }

  generateBoard(value) {
    let array = [];
    for (let i = 0; i < value; i++) {
      let row = [];
      for (let j = 0; j < value; j++) {
        row.push([i, j]);
      }
      array.push(row);
    }
    return array;
  }
}

function knightMoves(start, end) {
  const gameInstance = new Game();
  const board = gameInstance.board;
  const possibleMoves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  const queue = [{ position: start, path: [start] }];
  const visited = new Set();

  while (queue.length) {
    let { position, path } = queue.shift();

    // visited.add(JSON.stringify(position));

    if (position[0] === end[0] && position[1] === end[1]) {
      return path;
    }

    for (const move of possibleMoves) {
      let row = move[0];
      let col = move[1];
      let visit = [position[0] + row, position[1] + col];

      if (
        !visited.has(JSON.stringify(visit)) &&
        isInsideBoard(visit, gameInstance.value)
      ) {
        visited.add(JSON.stringify(visit));
        queue.push({ position: visit, path: [...path, visit] });
      }
    }
  }
  return null;
}

function isInsideBoard(coord, boardSize) {
  return (
    coord[0] >= 0 &&
    coord[0] <= boardSize &&
    coord[1] >= 0 &&
    coord[1] <= boardSize
  );
}

console.log(knightMoves([3, 3], [0, 0]));
