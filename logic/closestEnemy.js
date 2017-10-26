//your code here
function closestEnemy (arr){
  let indexMusuh = []
  let indexPrajurit = null
  for(let i = 0; i < arr.length; i++){
    if(arr[i]==1){
      indexPrajurit = i
    }else if(arr[i]==2){
      indexMusuh.push(i)
    }
  }
  let stateRight = false
  let stateLeft = false
  let surounded = false
  for(let i = 0; i < indexMusuh.length; i++){
    if(indexMusuh[i]>indexPrajurit){
      stateRight = true
    }
    if(indexMusuh[i]<indexPrajurit){
      stateLeft = true
    }
  }
  //console.log(stateRight,stateLeft)
  if(stateRight == true && stateLeft == true){
    console.log(`your are surounded by the enemy ${indexPrajurit - indexMusuh[0]} space on the left and right from your position`)
  }
  //console.log(`musuh = ${indexMusuh} ... prajurit = ${indexPrajurit}`)
  if(indexMusuh[0]>indexPrajurit && stateLeft == false){
    console.log(`your closest enemy ${indexMusuh[0]} space on the right from your position`)
  }
  if(indexMusuh[0]<indexPrajurit && stateRight == false){
    console.log(`your closest enemy ${indexPrajurit - indexMusuh[0]} space on the left from your position`)
  }

}

closestEnemy([2,0,0,1,0,0,2])
