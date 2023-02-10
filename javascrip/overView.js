//TODO legge til sluttskjerm med game over
//TODO regne ut om spiller fullførte minimumsscore?
//TODO highscorelist med 3letter nickname
//TODO knapp for retry
function updateViewOver(){
    let html =/*html*/ `
        <h1>Game over!<h1>
        <p>Poeng: ${model.score}</p>
        <p>fancyschmancy måte å skjekke plassering på highscore-list<br>
        hvor score kommer med inputfelt</p>
        <p>
            input here
        </p> 
        <p>
            restart here
        </p> 
        <p>
           TODO push hichscore og print top 3 på gameview
        </p> 

    `;
    content.innerHTML = html;
}