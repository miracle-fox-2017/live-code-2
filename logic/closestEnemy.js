//your code here
let closestEnemy = (arr) => {
  //1 adalah prajurit
  //2 adalah musuh
  //0 adalah langkah
  let jarak = [];
  let prajuritPos;
  let enemyPos = [];
  let lr;
  let jarakPrint;
  for(let i =0; i<arr.length; i++){
    if(arr[i]==1){
      prajuritPos = i;
    }
    if(arr[i]==2){
      enemyPos.push(i);
      
    }
  }
  
  //looping enemyPos
  for(let i =0; i<enemyPos.length;i++){
    jarak.push(enemyPos[i] - prajuritPos)
  }
  // console.log(jarak);
  let check = true;
  
  if(jarak.length>1){
    for(let i = 0; i<jarak.length;i++){
      //if jarak all ++
      //balikin value 1
      if(jarak[i]>0){
        check += 1
      } else{
        check += -1
      }
      
    }
    if(check>1){
      lr = 'right from your position'
      jarakPrint = Math.abs(jarak[0]);
    }else{
      lr = 'left and right from your position'
      jarakPrint = Math.abs(jarak[0]);
    }
    
  } else {  
    if(jarak<0){
      lr = 'left from your position'
      jarakPrint = Math.abs(jarak[0])
    }else if (jarak>0){
      lr = 'right from your position'
      jarakPrint = Math.abs(jarak[0])
    }
  }
  
  

  
  if(jarak.length>0){  
    return `Your closest enemy ${jarakPrint} space on the ${lr}`
  }else{
    return `There is no enemy`
  }
  

}

console.log(closestEnemy([1,0,0,0,2,2,2]));
console.log(closestEnemy([0,0,0,0,2,1,0]));
console.log(closestEnemy([2,0,0,1,0,0,2]));
console.log(closestEnemy([0,0,0,1,0]));