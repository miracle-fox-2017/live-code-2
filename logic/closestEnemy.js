function closestEnemy(arr){
  posPrajurit = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1){
      posPrajurit += i
    }
  }
  // console.log(posPrajurit);
  let posMusuhKanan = 0
  for(let j = posPrajurit; j < arr.length; j++){
    if(arr[j] === 2){
      posMusuhKanan += j
      j = arr.length
    }
  }
  // console.log(posMusuhKanan);
  posMusuhKiri = 0
  for(let k = posPrajurit; k > 0; k--){
    if(arr[k] === 2){
      posMusuhKiri += k
      k = 0
    }
  }
  // console.log(posMusuhKiri);
  jarakKanan = posMusuhKanan - posPrajurit
  jarakKiri = posPrajurit - posMusuhKiri
  // console.log(jarakKanan);
  // console.log(jarakKiri);
  if(jarakKanan + jarakKiri === 0){
    return 'There is no enemy'
  }
  if(jarakKanan > jarakKiri){
    return 'Your closest enemy ' + jarakKanan + ' space on the right from your position'
  }
  if(jarakKiri > jarakKanan){
    return 'Your closest enemy ' + jarakKiri + ' space on the left from your position'
  }
  if(jarakKiri === jarakKanan){
    return  'Your are surrounded by enemy!! ' + jarakKanan + ' space on the left and right side'
  }

}

console.log(closestEnemy([1,0,0,0,2,2,2]));
console.log(closestEnemy([0,0,0,0,2,1,0]));
console.log(closestEnemy([2,0,0,1,0,0,2]));
console.log(closestEnemy([0,0,0,1,0]));