
function updateViewOver() {
  makeNewScore();
  let highscoreList = sortHighScores();
  let html = /*html*/ `
        <h1>Game over!<h1>
        <p>Din eplejuice ble ${model.score} god</p>
        <h1>Highscores:</h1>
        ${displayRank()}
        <p>
            <label for="nick">Nickname:</label>
            <input 
                name="nick"
                type="text" 
                maxlength="8"
                placeholder="Kun tall og bokstaver"
                onchange="model.over.nickname = this.value" 
                value="${model.over.nickname}">
            <input type="submit" value="Spill igjen!" onclick="restart(model.over.nickname)">
            <br>
            Tomme navn blir slettet.
        </p> 

    `;
  content.innerHTML = html;
}

function displayRank() {
  //burde kunne forenkles, men jeg aner ikke hvordan
  let list = model.tempScores[0];
  let html = "";
  for (let index = 0; index < list.length; index++) {
    if (list[index].name == "Din score: ") {
      if (index == 0) {
        html += /*html*/ `
                  <h2>Gratulerer! Ny highscore!</h2>
                  <h3> ${index + 1}: 
                      ${list[index].name} 
                      ${list[index].score}
                  </h3>
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
                      
                        <h3> ${index + 1}: 
                            ${list[index].name} 
                            ${list[index].score}
                        </h3>
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
