//TODO legge til failstate

function getRandom(max) {
  //henter ut et random tall mellom 0 og argument.
  let randomPosition = Math.floor(Math.random() * max);
  return randomPosition;
}

function randomApple() {
  //TODO kan bruke denne til å øke score og extend snake length
  // finner tilfeldig epleposisjon
  model.fruit.pos = [getRandom(model.size), getRandom(model.size)];
  if (model.running) {
    model.score = model.score + model.pointValue;
  }
}

function updateBoard(size) {
  //fyller model.board
  let boardArray = [];
  for (let i = 0; i < size; i++) {
    boardArray[i] = [];
    for (let j = 0; j < size; j++) {
      boardArray[i][j] = { html: "test" };
    }
  }
  model.board = boardArray;
}

function move(key) {
  //gir retning, men bare om du har trykket noe
  if (model.direction[0] === 0 && model.direction[1] === 0) {
    return;
  }
  // venstre med left eller a
  if ((key.keyCode == 37 || key.keyCode == 65) && model.direction[1] != 1) {
    model.direction[1] = -1;
    model.direction[0] = 0;
  }
  //opp med up eller w
  if ((key.keyCode == 38 || key.keyCode == 87) && model.direction[0] != 1) {
    model.direction[1] = 0;
    model.direction[0] = -1;
  }
  //høyre med right eller d
  if ((key.keyCode == 39 || key.keyCode == 68) && model.direction[1] != -1) {
    model.direction[1] = +1;
    model.direction[0] = 0;
  }
  //ned med down eller s
  if ((key.keyCode == 40 || key.keyCode == 83) && model.direction[0] != -1) {
    model.direction[1] = 0;
    model.direction[0] = +1;
  }
  if (!model.running) {
    model.running = true;
    runGame();
  }
}
function moveValues(pos) {
  pos[0] = pos[0] + model.direction[0];
  pos[1] = pos[1] + model.direction[1];
}

function runGame() {
  //TODO trigger game over
  const timer = setTimeout(runGame, model.difficulty);
  moveHead(model.snkHead);
  if (
    model.snkHead.pos[0] == model.fruit.pos[0] &&
    model.snkHead.pos[1] == model.fruit.pos[1]
  ) {
    model.snkGrowth = true;
    randomApple();
  }
  checkFail();
  updateView();
}

function moveHead(inputPos) {
  let oldPos = inputPos.pos;
  moveValues(oldPos);
  let oldX = oldPos[0];
  let oldY = oldPos[1];
  model.snkBody = makeBody(oldX, oldY);
  model.snkHead.next = model.snkBody;
  if (model.snkGrowth) {
    model.snkGrowth = false;
  } else {
    let body = model.snkBody;
    let bodyLast = null;
    while (body.next != null) {
      bodyLast = body;
      body = body.next;
    }
    if (bodyLast != null) {
      bodyLast.next = null;
    }
  }
}

function makeBody(posX, posY) {
  //returnerer et objekt med posisjon som har forrige posisjon, bilde
  return {
    html: "<img src='img/BoH.png'>",
    pos: [posX, posY],
    next: model.snkBody,
  };
}

function readValues() {
  //legger inn bilder i board før det tegnes opp
  for (let i = 0; i < model.board.length; i++) {
    for (let j = 0; j < model.board[i].length; j++) {
      if (i == model.snkHead.pos[0] && j == model.snkHead.pos[1]) {
        model.board[i][j].html = model.snkHead.html;
      } else if (i == model.fruit.pos[0] && j == model.fruit.pos[1]) {
        model.board[i][j].html = model.fruit.html;
        // kjøre while-løkke som tråler gjennom body
      } else {
        let body = model.snkHead.next;
        while (body != null) {
          if (i == body.pos[0] && j == body.pos[1]) {
            model.board[i][j].html = body.html;
          }
          body = body.next;
        }
      }
    }
  }
}

function checkFail() {
  //skal detektere om kræsj i vegg eller seg selv
  let skip = true;
  let head = model.snkHead;
  let body = model.snkHead.next;
  while (body != null) {
    //skip first fordi første vil alti dele pos med head
    if(skip){
      skip = false;
    }else if (head.pos[0] == body.pos[0] && head.pos[1] == body.pos[1]) {
      console.log(head.pos[0],
        body.pos[0],
        head.pos[1],
        body.pos[1])
      triggerFail();
    }
    body = body.next;
  }
  if((head.pos[0] > model.size) || (head.pos[0] < 0) || (head.pos[1] > model.size) || (head.pos[1] < 0)){
    console.log("wall error?")
    triggerFail();
  }
}

function triggerFail(){
  console.log("you deud")
}