function closestEnemy(arr) {
  let stepRight = 0
  let stepLeft = 0
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] == 1){
      if(arr[i+1] == 0 || arr[i+1] == 2){ // check right side
        for (var j = i+1; j < arr.length; j++) {
          if(arr[j] == 0){
            stepRight++
          }else if(arr[j] == 2){
            stepRight++
            for (var j = i-1; j >= 0; j--) {
              if(arr[j] == 0){
                stepLeft++
              }else if(arr[j] == 2){
                stepLeft++
                return `Your are surrounded by enemy ${stepLeft} space on the left and ${stepRight} space on the right from your position`
              }
            }
            return `Your closest enemy ${stepRight} space on the right from your position`
          }
        }
      }
      if(arr[i-1] == 0 || arr[i-1] == 2){
        for (var j = i-1; j >= 0; j--) {
          if(arr[j] == 0){
            stepLeft++
          }else if(arr[j] == 2){
            stepLeft++
            return `Your closest enemy ${stepLeft} space on the left from your position`
          }
        }
      }
      return 'There is no enemy'
    }
  }
}

console.log(closestEnemy([1,0,0,0,2,2,2]))
console.log(closestEnemy([0,0,0,0,2,1,0]))
console.log(closestEnemy([2,0,0,1,0,0,2]))
console.log(closestEnemy([0,0,2,1,0,2,0]))
console.log(closestEnemy([0,0,0,0,0,1,0]))
