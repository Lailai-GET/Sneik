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
  model.snkBody.length++;
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
      if (model.snkBody > 0) {
        for (let k = 0; k < model.snkBody.length; k++) {
          if (i == model.snkBody[k].pos[0] && j == model.snkBody[k].pos[1]) {
            boardArray[i][j] = model.snkBody[k];
          }
        }
      }
    }
  }
  model.board = boardArray;
}

function move(key) {
  //TODO finne måte å flytte slange på
  // venstre med left eller a
  if (key.keyCode == 37 || key.keyCode == 65) model.direction = "left";
  //opp med up eller w
  if (key.keyCode == 38 || key.keyCode == 87) model.direction = "up";
  //høyre med right eller d
  if (key.keyCode == 39 || key.keyCode == 68) model.direction = "right";
  //ned med down eller s
  if (key.keyCode == 40 || key.keyCode == 83) model.direction = "down";
  console.log(model.direction);
  runGame();
}
function moveValues(snkToChange) {
  //endrer index for å flytte posisjon på enkeltdeler
  let snakePart = snkToChange;
  if (model.direction === "") return;
  else if (model.direction === "left") {
    snakePart[1]--;
  } else if (model.direction === "up") {
    snakePart[0]--;
  } else if (model.direction === "right") {
    snakePart[1]++;
  } else if (model.direction === "down") {
    snakePart[0]++;
  }
  return (snkToChange = snakePart);
}

function runGame() {
  //TODO trigger game over
  //TODO snkBody moveloop?!
  let old = model.snkHead.pos;
  moveValues(old);
  makeBody(old);
  if (
    model.snkHead.pos[0] == model.fruit.pos[0] &&
    model.snkHead.pos[1] == model.fruit.pos[1]
  ) {
    randomApple();
  }
  updateView();
}
function makeBody(oldHead) {
  //skal peke mot hodet først, så på forrige kroppsdel.
  //TODO make this shit work
  let previous = oldHead;
  console.log(model.snkBody.length);
  if (model.snkBody.length > 0) {
    for (let i = 0; i < model.snkBody.length; i++) {
      console.log(previous);
      model.snkBody[i] = {
        html: "<img src='img/BoH.png'>",
        pos: previous,
      };
      moveValues(previous);
    }
  }
}
