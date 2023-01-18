function updateValues() {
  model.size = parseInt(model.start.size);
  model.difficulty = parseInt(model.start.difficulty);
  model.page = "game";
  createBoard(model.size);
  updateView();
}

function createBoard(size) {
  let boardArray = [];
  for (let i = 0; i < size; i++) {
    boardArray[i] = [];
    for (let j = 0; j < size; j++) {
      boardArray[i][j] = { html: "test" };
    }
  }
  model.board = boardArray;
}
