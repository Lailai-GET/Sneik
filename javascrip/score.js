function sortHighScores(){
    return model.highscore.scores.sort((a,b)=>a-b);
    //vanlig sort er alfabetisk. Heldigvis er det snarveier for å få nummerisk sortering
}