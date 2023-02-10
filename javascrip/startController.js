function updateValues() {
  //setter alle verdiene til data i modellen utifra user input på startskjerm
  //kaller på randoms for å lage startposisjon
  //TODO øk point value i forhold til hastighet og størrelse med morsom matte
  model.size = parseInt(model.start.size);
  model.difficulty = 550 -parseInt(model.start.difficulty)*100;
  model.pointValue = calculatePointValue();
  model.page = "game";
  randomApple();
  randomStart();
  model.snkBody.pos = model.snkHead.pos;
  updateBoard(model.size);
  updateView();
}

function calculatePointValue(){
  //stort brett gir mindre poeng siden du kan ha større slange, høy hastighet gir lav difficulty og mindre fratrekk
  let maxValue = 550 + 30;//høyeste timerverdi og brettstørrelse
  let settings = model.difficulty + model.size*4;
  let value = maxValue-settings;
  if(value = 990)value = 9001;
  console.log(value);
  return value;
}

function randomStart(){
  //henter random tall til snakehead så kan starte tilfeldig plass
  //bruk disse for å skrive om HTML på model.board
  model.snkHead.pos = [getRandom(model.size), getRandom(model.size)];
}