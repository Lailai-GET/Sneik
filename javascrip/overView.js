//TODO legge til sluttskjerm med game over
//TODO regne ut om spiller fullførte minimumsscore?
//TODO highscorelist med 3letter nickname
//TODO knapp for retry
function updateViewOver(){
    makeNewScore();
    let highscoreList = sortHighScores();
    let html =/*html*/ `
        <h1>Game over!<h1>
        <p>Poeng: ${model.score}</p>
        ${displayRank()}
        <p>
            input here for nickname
        </p> 
        <p>
            restart her, skal bare funke om nickname != "Din score: "
        </p> 

    `;
    content.innerHTML = html;
}