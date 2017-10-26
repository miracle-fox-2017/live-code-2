//your code here
function closestEnemy(array){
  let prajurit  = array[0]
  let musuh     = array[1]
  let jarak     = array[2]
  let rand      = Math.floor(Math.random() * 4) + 1
  let randEnemy = Math.floor(Math.random() * 2) + 1

  let container = []

  container.push(prajurit)
  for(let i=0; i<rand; i++){
    container.push(jarak)
  }
  for(let j=0; j<randEnemy; j++){
    container.push(musuh)
  }

  let resultPrajurit = []
  let resultJarak    = []
  let resultMusuh    = []
  for(let k=0; k<container.length; k++){
    // console.log(container[k]);
    if(container[k] == prajurit){
      resultPrajurit.push(prajurit)
    }else if(container[k] == jarak){
      resultJarak.push(jarak)
    }else if(container[k] == musuh){
      resultMusuh.push(musuh)
    }
  }

  console.log(container);
  if(resultJarak.length > 3){
    console.log(`Your closest enemy 4 space on the right from your position`);
  }else if(resultJarak.length == 3){
    console.log(`Your closest enemy 3 space on the right from your position`);
  }else if(resultMusuh.length == 0){
    console.log('there is no enemy');
  }else if(resultJarak.length <= 2){
    console.log('your closest enemy 1 space on the left from your position');
  }
}

closestEnemy([1,2,0])
// console.log(closestEnemy([1,2,0]));
