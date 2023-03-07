
function updateValues() {
  //setter alle verdiene til data i modellen utifra user input på startskjerm
  //kaller på randoms for å lage startposisjon
  model.size = parseInt(model.start.size);
  model.difficulty = 100 -parseInt(model.start.difficulty)*9;
  model.pointValue = calculatePointValue();
  model.page = "game";
  randomApple();
  randomStart();
  model.snkBody.pos = model.snkHead.pos;
  updateBoard(model.size);
  model.highscores = model.online.list;
  updateView();
}

function calculatePointValue(){
  //stort brett gir mindre poeng siden du kan ha større slange, høy hastighet gir lav difficulty og mindre fratrekk
  let maxValue = 100 + 30;//høyeste timerverdi og brettstørrelse
  let settings = model.difficulty + model.size;
  let value = maxValue-settings;
  value = parseInt(value);
  if(value == 110)value = 9001;//it's over 9000, good luck
  return value;
}

function randomStart(){
  //henter random tall til snakehead så kan starte tilfeldig plass
  //bruk disse for å skrive om HTML på model.board
  model.snkHead.pos = [getRandom(model.size), getRandom(model.size)];
}

function updateLocalData(){
  import('./firebase.js')
  .then(module => {
    const result = module.getHighscores();
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
  sorter(model.highscores);
}