
function updateViewGame(){
    let html = "";
    for(let i = 0; i < model.board.length; i++){
        let boardRow = "";
        for (let j = 0; j < model.board.length; j++){
            boardRow += `<div class="cell"> ${model.board[i][j].html}</div>`;
        }
        html += `<div class="rows">${boardRow}</div>`;
    }
    content.innerHTML = html;
}