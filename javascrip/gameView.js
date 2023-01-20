function updateViewGame(){
    //tegner opp spillskjermen med spillbrett
    //TODO legg til current score, muligens target score og highscore? Point value?
    let html = "";
    updateBoard();
    for(let i = 0; i < model.board.length; i++){
        let boardRow = "";
        for (let j = 0; j < model.board.length; j++){
            boardRow += `<div class="cell"> ${model.board[i][j].html}</div>`;
        }
        html += `<div class="rows">${boardRow}</div>`;
    }
    content.innerHTML = html;
}