//TODO legge spillers score på highscore list. firebase???????
function sortHighScores() {
  let list = model.tempScores;
  list.push(
    model.highscores.map((content) => {
      //om jeg pusher model.highscores, så blir det referanseverdi?
      //løste vet å pushe hvert objekt for seg...
      return content;
    })
  );
  list[0].push(makeNewScore());
  return sorter(list[0]);
}

function makeNewScore() {
  //sender current score til highscore-list
  return {
    name: "Din score: ",
    score: model.score,
  };
}

function sorter(list) {
  return list
    .sort((a, b) => {
      if (a.score > b.score) {
        return 1;
      }
      if (a.score < b.score) {
        return -1;
      }
      return 0;
    })
    .reverse();
}

function restart(name){
    if(characterCheck(name)){
        console.log(name,"nick");
    }else{
        console.log("It virks")
    }
}

function characterCheck(name){
   var letters = /^[a-zA-Z0-9-]+$/;
   if(name.match(letters))
     {
      return true;
     }
   else
     {
     alert("Kun tall og bokstaver. Poeng slettet. Sorry.");
     return false;
     }
  }