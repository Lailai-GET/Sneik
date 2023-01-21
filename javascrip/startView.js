function updateViewStart(){
    //skriver startskjerm som beskriver backstory og funksjon og sånn
    //bruker kan endre variabler som påvirker spillet før det starter
    //brukerinput sendes videre til updateValues() for å endre model.data
    //TODO Omformuler litt fordi jeg er kresen liten fis.
    //TODO få frem en target score og raskere hastighet og mindre brett gir mer poeng
    let html = /*html*/ `
    <h1> Mollys epler </h1>
    <p>Hjelp Zaraikval å samle epler for å lage eplejuice til Molly! </p>
    <p>Zarai har en litt feilaktig bag of holding, som blir større jo mer som er i den.
    Den er også noe ustabil, så mens hen leter etter de beste eplene, 
    så må hen hele tiden være forsiktig å ikke snuble over bagen så den revner.</p>
    <p>Alle vet jo også at den beste eplejuicen er fersk. Jo flere epler, og jo fortere de samles, 
    desto bedre eplejuice blir det.</p>
    <p>Klarer du å lage så bra eplejuice at ingen mistenker gift?</p>
    
    <div class="inputs">
    Hvor stort område skal Zaraikval finne epler på? <br>
    <input type="range" min="10" max="30" onchange="model.start.size = this.value; updateView()" value="${model.start.size}">
    ${model.start.size}
    <br>
    Hvor fort skal Zaraikval løpe? <br>
    <input type="range" min="1" max="10" onchange="model.start.difficulty = this.value; updateView()" value="${model.start.difficulty}">
    ${model.start.difficulty}
    <br>
    <button onclick="updateValues()">Eplejakt!</button>
    </div>
    `;
    content.innerHTML = html;
}