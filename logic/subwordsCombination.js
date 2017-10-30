//your code here
function getCombinations(value){
  let arr = [];
  for(let i = 0; i < value.length; i++){
    // let valueI = value[i]
    for(let y = 0; y < value.length-1; y++){
      console.log(value[y]);
      arr.push(value[y]+value[y+1])
    }
  }
  console.log(arr);
}
getCombinations('cros')
