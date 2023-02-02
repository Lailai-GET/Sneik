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
  snkHead: {next: null, html: "<img src='img/Zaraikval.png'>"},
  snkGrowth: 0,
  fruit: {html: "<img src='img/apple.png'>"},
  highscore: [],
  direction: "",
  pointValue: 0,
  direction: "",
};
