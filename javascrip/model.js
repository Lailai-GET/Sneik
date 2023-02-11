const model = {
  //state start, game, over
  page: "start",
  //inputs
  start: {
    size: 30,
    difficulty: 5,
  },
  over: {
    nickname: "",
  },
  //data
  size: 0,
  difficulty: 0,
  board: [],
  snkHead: {
    next: null,
    html: "<img class='zarai' src='img/Zaraikval.png'>"
  },
  snkBody: {
    next: null,
    html: "<img src='img/BoH.png'>",
    pos: [0,0]
  },
  snkGrowth: false,
  fruit: {html: "<img src='img/apple.png'>"},
  score: 0,
  highscores: [{name:"ingenting",score:0}],
  tempScores: [],
  pointValue: 0,
  direction: [[0][0]],
  running: false,
  dead: false,
};
