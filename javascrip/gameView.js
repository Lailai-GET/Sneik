function updateViewGame(){
    //tegner opp spillskjermen med spillbrett
    let html = `
    <div>Score:${model.score}</div>
    <div>Highcore: ${model.highscores ?`${model.highscores[0].name}   ${model.highscores[0].score}` : "Du er første. Hei!"}</div>
    `;
    updateBoard(model.size);
    readValues();
    for(let i = 0; i < model.board.length; i++){
        let boardRow = "";
        for (let j = 0; j < model.board.length; j++){
            boardRow += `<div class="cell"> ${model.board[i][j].html}</div>`;
        }
        html += `<div class="rows">${boardRow}</div>`;
    }

    content.innerHTML = html;
}