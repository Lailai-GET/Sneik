//TODO få ting til å funke
//TODO everything
function getRandom(max) {
  //henter ut et random tall mellom 0 og argument.
  let randomPosition = Math.floor(Math.random() * max);
  return randomPosition;
}

function randomApple() {
  //TODO kan bruke denne til å øke score og extend snake length
  // finner tilfeldig epleposisjon
  model.fruit.pos = [getRandom(model.size), getRandom(model.size)];
  model.snkGrowth = 1;
}

function updateBoard(size) {
  //fyller model.board med slanger og frukt før det tegnes opp
  let boardArray = [];
  for (let i = 0; i < size; i++) {
    boardArray[i] = [];
    for (let j = 0; j < size; j++) {
      if (i == model.snkHead.pos[0] && j == model.snkHead.pos[1]) {
        boardArray[i][j] = model.snkHead;
      } else if (i == model.fruit.pos[0] && j == model.fruit.pos[1]) {
        boardArray[i][j] = model.fruit;
      } else boardArray[i][j] = { html: "test" };
    }
  }
  model.board = boardArray;
}

function move(key) {
  // venstre med left eller a
  if (key.keyCode == 37 || key.keyCode == 65) {
    model.direction[1] = -1;
    model.direction[0] = 0;
  }
  //opp med up eller w
  if (key.keyCode == 38 || key.keyCode == 87) {
    model.direction[1] = 0;
    model.direction[0] = -1;
  }
  //høyre med right eller d
  if (key.keyCode == 39 || key.keyCode == 68) {
    model.direction[1] = +1;
    model.direction[0] = 0;
  }
  //ned med down eller s
  if (key.keyCode == 40 || key.keyCode == 83) {
    model.direction[1] = 0;
    model.direction[0] = +1;
  }
  console.log(model.direction);
  runGame();
}
function moveValues(pos) {
  pos[0] = pos[0] + model.direction[0];
  pos[1] = pos[1] + model.direction[1];
}

function runGame() {
  //TODO trigger game over
  //TODO snkBody moveloop?!
  let headPos = model.snkHead.pos;
  moveValues(headPos)
  if (
    model.snkHead.pos[0] == model.fruit.pos[0] &&
    model.snkHead.pos[1] == model.fruit.pos[1]
  ) {
    randomApple();
  }
  updateView();
}
function makeBody(head) {
  //skal peke mot hodet først, så på neste kroppsdel.
  //TODO Linkeliste???
  let snake = head;
}

