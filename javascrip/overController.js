//TODO legge spillers score på highscore list. firebase???????
function sortHighScores() {
    let list = model.highscores;
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
  
  function makeNewScore() {
    //sender current score til highscore-list
    model.highscores.push({
      name: "Din score: ",
      score: model.score,
    });
  }