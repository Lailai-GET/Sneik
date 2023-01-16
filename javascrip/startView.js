//TODO Skriv om alt. hva mener jeg, alt- AAAAALT!

function updateViewStart(){
    let html = 'testing';
    for (let i = 0; i < 10 ; i++){
        model.board[i] = [];
        for (let j = 0; j < 10 ; j++){
            model.board[i][j] = {x: i, y: j};
        }
    }
    for (let i = 0; i < model.board.length; i++){
        html += /*html*/ `
        <tr> ${createRow(i)} </tr>
        `
    }


    app.innerHTML = html;
}
function createRow(i){
    let rowData = ''
    console.log(model.board[i])
    for (let j = 0; j < model.board[i].length; j++){
rowData += /*html*/ `
        <td>${model.board[i][j].x} , ${model.board[i][j].y} </td>
        `
    }
    return rowData;
}
