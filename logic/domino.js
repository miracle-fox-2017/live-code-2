//your code here
function dominoCard (arr, kartu){
  let res = []
  for(let i =0; i < arr.length; i++){
    for(let j =0; j < arr[i].length; j++){
      console.log(arr[i][j], i);
      if(arr[i][j] == kartu[0] || arr[i][j] == kartu[1] && arr[i][j] == kartu[1]
        || arr[i][j] == kartu[0]){
        res.push(arr[i][j]);
      }
    }
  }
  return res
}

console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]));
