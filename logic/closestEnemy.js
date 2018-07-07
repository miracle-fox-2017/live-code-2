
let war = [1,0,0,0,0,]

function closestEnemy(arr){

  let prajurit = arr.indexOf(1)
  let musuh = arr.indexOf(2)
if(musuh==-1){
  return 'There is no enemy'
}
else if(musuh<prajurit){
  let jarak=prajurit - musuh
  return 'Your closest enemy '+jarak+ ' spaces on the left from your position'
}
else if(prajurit<musuh){
let jarak = musuh - prajurit
return 'Your closest enemy '+jarak+ ' spaces on the right from your position'
}

}

console.log(closestEnemy(war));
