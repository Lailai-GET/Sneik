function updateValues() {
  //setter alle verdiene til data i modellen utifra user input på startskjerm
  //kaller på randoms for å lage startposisjon
  //TODO øk point value i forhold til hastighet og størrelse med morsom matte
  model.size = parseInt(model.start.size);
  model.difficulty = 1100 -parseInt(model.start.difficulty)*100;
  model.page = "game";
  //blanker ut direction så folk kan zoome ut og inn, rører seg ikke før starter pil
  model.direction = "";
  randomApple();
  randomStart();
  updateBoard(model.size);
  updateView();
}

// function createBoard(size) {
//   //Generer så nærme 2Darray en får i javascript
//   //TODO fjern "test" fra html i objektet når er forbi testfasen
//   let boardArray = [];
//   for (let i = 0; i < size; i++) {
//     boardArray[i] = [];
//     for (let j = 0; j < size; j++) {
//       boardArray[i][j] = { html: "test" };
//     }
//   }
//   model.board = boardArray;
// }

function randomStart(){
  //henter random tall til snakehead så kan starte tilfeldig plass
  //bruk disse for å skrive om HTML på model.board
  model.snkHead.pos = [getRandom(model.size), getRandom(model.size)];
}