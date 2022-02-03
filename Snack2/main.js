
let teams = [
  {
    nameTeam: "Milan",
    points: 0,
    fouls: 0
  },
  {
    nameTeam: "Atalanta",
    points: 0,
    fouls: 0
  },
  {
    nameTeam: "Juventus",
    points: 0,
    fouls: 0
  },
  {
    nameTeam: "Inter",
    points: 0,
    fouls: 0
  },
  {
    nameTeam: "Lazio",
    points: 0,
    fouls: 0
  },
  {
    nameTeam: "Roma",
    points: 0,
    fouls: 0
  },
  {
    nameTeam: "Napoli",
    points: 0,
    fouls: 0
  },
]

for(let i = 0; i < teams.length; i++){
  teams[i].points = randomNumber(0,64);
  teams[i].fouls = randomNumber(0,64);
}


let {nameTeam, fouls} = teams


console.log(nameTeam)
console.log(fouls)



function randomNumber (max, min){
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}