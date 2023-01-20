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

}