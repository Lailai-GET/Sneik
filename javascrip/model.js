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
    html: "<img src='img/Zaraikval.png'>"
  },
  snkBody: {
    next: null,
    html: "<img src='img/BoH.png'>",
    pos: [0,0]
  },
  snkGrowth: false,
  fruit: {html: "<img src='img/apple.png'>"},
  score: 0,
  highscore: {
    scores: [2220, 111, 333,],//kun poengverdi for easy sorting
    sorted: [],
    full: [{name:"test2",score:2220},{name:"test1",score:111},{name:"test3",score:333}],//poeng kombinert med nickname, sammenlign med scores etter den er sorted
  },
  pointValue: 0,
  direction: [[0][0]],
  running: false,
};
