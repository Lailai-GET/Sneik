//TODO hvorfor pusher den tomme navn?
//TODO  firebase???????
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
    //sorterer highscores etter score
  return list
    .sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    })
}

function restart(inputName) {
  //ser først om nickname inneholder tegn, så setter modellen til startverdi og kjører på nytt
  if (characterCheck(inputName)) {
    console.log(inputName == "","if this true then wy?")
    model.highscores.push({
      name: inputName,
      score: model.score,
    });
    sorter(model.highscores);
  }
  model.page = "start";
  model.snkHead = {
    next: null,
    html: "<img src='img/Zaraikval.png'>",
  };
  model.snkBody = {
    next: null,
    html: "<img src='img/BoH.png'>",
    pos: [0, 0],
  };
  model.snkGrowth = false;
  model.score = 0;
  model.tempScores = [];
  model.direction = [[0][0]];
  model.running = false;
  model.dead = false;
  updateView();
}

function characterCheck(name) {
    //skjønner ikke helt syntax, men den filtrer ut tegn
  if (/^[A-Za-z0-9æÆøØåÅ]*$/.test(name)) {
    return true;
  } else {
    if (name == "") {

      return false;
    } else alert("Kun tall og bokstaver, poeng slettet");
    return false;
  }
}
