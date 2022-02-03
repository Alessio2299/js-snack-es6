let arrBikes = [
  {
    nome : "Bianchi",
    peso : 12
  },
  {
    nome : "Legnano",
    peso : 15
  },
  {
    nome : "Cinelli",
    peso : 11
  },
  {
    nome : "Pinarello",
    peso : 17
  },
  {
    nome : "Olmo",
    peso : 14
  },
]


function pesoMinore (bici){
  let minore = 0;
  if(bici[0].peso < bici[1].peso){
    minore = bici[0].peso;
  } else if (bici[0].peso == bici[1].peso){
    minore = bici[0].peso;
  } else{
    minore = bici[1].peso;
  }
  for(let i = 2; i < bici.length; i++){
    if(minore > bici[i].peso){
      minore = bici[i].peso;
    }
  }
  return minore
}
