//your code here
//Driver Code :
function getCombinations(value) {
	//write your code here
  // buat array
  //pnajng array
  let res = []
  let arrResult = []

  for(let i = 0; i < value.length; i++){
      res.push(value[i])
    for(let j = 0; j < value.length; j++){
        if(i == j){
        res.push(value[i]+value[i+1] )
      }else if (i == j-1) {
        res.push(value[i]+value[i+1] + value[i+2])
      }
      else if (i == j-2) {
        res.push(value[i]+value[i+1] + value[i+2] + value[i+3])
      }
    }
  }
  for (let i = 0; i < res.length; i++){
    if(res[i].length < value.length){
      arrResult.push(res[i])
    }
  }
  console.log(arrResult);
}

//Contoh 1 :
getCombinations('cros')
getCombinations('artic')
getCombinations('darwin')
