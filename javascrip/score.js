// function sortHighScores(){
//     return model.highscore.scores.sort((a,b)=>a-b);
//     //vanlig sort er alfabetisk. Heldigvis er det snarveier for å få nummerisk sortering
// } update: I love .sort!! plutselig slapp jeg masse ekstrajobb!

function sortHighScores(){
    let list = model.highscores;
    return list.sort((a,b)=>{
        if(a.score > b.score){
            return 1;
        }
        if(a.score < b.score){
            return -1;
        }
        return 0;
    }).reverse();
}