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
  snkHead: { img: "<img src='img/Zaraikval.png'>"},
  snkBody: [],
  fruit: {},
  highscore: [],
  direction: "",
  //  app: document.getElementById('app')
};