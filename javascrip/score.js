// function sortHighScores(){
//     return model.highscore.scores.sort((a,b)=>a-b);
//     //vanlig sort er alfabetisk. Heldigvis er det snarveier for å få nummerisk sortering
// } update: I love .sort!! plutselig slapp jeg masse ekstrajobb!

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

function displayRank() {
  //burde kunne forenkles, men jeg aner ikke hvordan
  let list = model.highscores;
  let html = "";
  for (let index = 0; index < list.length; index++) {
    console.log(
      list,
      "hva jeg mapper",
      index,
      "map index",
      list[index],
      "list[index]"
    );
    if (list[index].name == "Din score: ") {
      if (index == 0) {
        html += /*html*/ `
                <h3>Gratulerer! Ny highscore!</h3>
                <p> ${index + 1}: 
                    ${list[index].name} 
                    ${list[index].score}
                </p>
                <p> ${index + 2}: 
                    ${list[index + 1].name} 
                    ${list[index + 1].score}
                </p>
                <p> ${index + 3}: 
                    ${list[index + 2].name} 
                    ${list[index + 2].score}
                </p>
                <p>${index + 4}: 
                    ${list[index + 3].name} 
                    ${list[index + 3].score}
                </p>
                `;
      } else {
        html += /*html*/ `
                <h3>Din plassering: ${index + 1}</h3>
                ${
                  list[index - 3] != undefined
                    ? `
                    <p> ${index - 2}: 
                        ${list[index - 3].name} 
                        ${list[index - 3].score}
                    </p>`
                    : ""
                }
                ${
                    list[index - 2] != undefined
                      ? `
                      <p> ${index - 1}: 
                          ${list[index - 2].name} 
                          ${list[index - 2].score}
                      </p>`
                      : ""
                  }
                  ${
                    list[index - 1] != undefined
                      ? `
                      <p> ${index}: 
                          ${list[index - 1].name} 
                          ${list[index - 1].score}
                      </p>`
                      : ""
                  }
                  ${
                    list[index] != undefined
                      ? `
                      <p> ${index + 1}: 
                          ${list[index].name} 
                          ${list[index].score}
                      </p>`
                      : ""
                  }
                  ${
                    list[index + 1] != undefined
                      ? `
                      <p> ${index + 2}: 
                          ${list[index + 1].name} 
                          ${list[index + 1].score}
                      </p>`
                      : ""
                  }
                  ${
                    list[index + 2] != undefined
                      ? `
                      <p> ${index + 3}: 
                          ${list[index + 2].name} 
                          ${list[index + 2].score}
                      </p>`
                      : ""
                  }
                  ${
                    list[index + 3] != undefined
                      ? `
                      <p> ${index + 4}: 
                          ${list[index + 3].name} 
                          ${list[index + 3].score}
                      </p>`
                      : ""
                  }
                `;
      }
    }
  }
  return html;
}
