//TODO få ting til å funke
//TODO everything
function getRandom(max){
    //henter ut et random tall mellom 0 og argument. 
    //Vil du ha noe tilfeldig fra et array, bruk denne funksjonen som index med arrayNavn.length som parameter
    let randomPosition =
        Math.floor(Math.random() * max);
    return randomPosition;
}

function randomApple(){
    // finner tilfeldig epleposisjon
    model.fruit.pos = [getRandom(model.size), getRandom(model.size)];
}

function updateBoard(){
    //fyller model.board med slanger og frukt før det tegnes opp
    model.board[model.snkHead.pos[0]][model.snkHead.pos[1]].html = model.snkHead.img;
    model.board[model.fruit.pos[0]][model.fruit.pos[1]].html = model.fruit.img;
}
function move(key){
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
function runGame(){
    //TODO flytte litt posisjoner, detect apple collect, trigger game over
    if (model.direction === "") return;
    else if (model.direction === "left") {
        model.snkHead.pos[1]--
    }
    else if (model.direction === "up") {
        model.snkHead.pos[0]--
    }
    else if (model.direction === "right") {
        model.snkHead.pos[1]++
    }
    else if (model.direction === "down") {
        model.snkHead.pos[0]++
    }
    if(model.snkHead.pos[0] == model.fruit.pos[0] && model.snkHead.pos[1] == model.fruit.pos[1]){
        randomApple();
    }
    updateView()
}