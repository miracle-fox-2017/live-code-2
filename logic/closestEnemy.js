//your code here
function closestEnemy(){
  let arr = [];
  let oneCounter = 0;
  let zeroCounter = 0
  for(let i = 0; i <= 5; i++){
    arr.push(Math.floor(Math.random()*2));
    if(arr[i] === 1){
      oneCounter++
      if(oneCounter > 1){
        arr[i] = 2
      }
    }
  }
  console.log(arr);
  for(let y = 0; y < arr.length; y++){
    for(let k = 0; k < arr.length; k++){
      if(arr[y] === 1){
        if(arr[y+k] === 2  && arr[y+1] === 0){
          zeroCounter++
          console.log(`enemy ${zeroCounter} on your right`);
        }
        else if(arr[y+1] === 0){

        }
      }
    }
  }
}
closestEnemy()
