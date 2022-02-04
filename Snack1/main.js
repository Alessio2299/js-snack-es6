let arrBikes = [
  {
    name : "Bianchi",
    weight : 12
  },
  {
    name : "Legnano",
    weight : 10
  },
  {
    name : "Cinelli",
    weight : 11
  },
  {
    name : "Pinarello",
    weight : 11
  },
  {
    name : "Olmo",
    weight : 14
  },
]

let currentI = lowerWeight(arrBikes);

// Stampo a schermo con il destructuring e template literal il nome e il peso della bici piu leggera
let {name, weight} = arrBikes[currentI];
alert(`La bici con il peso minore è: ${name} che pesa ${weight}kg.`)

function lowerWeight (bikes){
  let currentI = 0;
  let lower = bikes[0].weight;
  for(let i = 1; i < bikes.length; i++){
    if(lower > bikes[i].weight){
      lower = bikes[i].weight;
      currentI = i;
    }
  }
  return currentI
}


