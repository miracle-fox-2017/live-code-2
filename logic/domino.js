//your code here
function dominoCard (arr, card){

  for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
      }
  }

}
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])); //6,5
