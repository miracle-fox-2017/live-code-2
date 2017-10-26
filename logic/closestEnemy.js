//your code here
function enemy(arr){
  var prajurit;
  var musuh;
  var arrMusuh = [];
  var arrJarak = []
  var jarak = 0
  var arrHasil = []
  if(arr.indexOf(2) === -1){
    return 'there is no enemey'
  }
  else{
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 1){
        prajurit = i
      }
      else if(arr[i] == 2){
        musuh = i
        arrMusuh.push(musuh)
        arrMusuh.sort()
      }
    }
  }
    if(arrMusuh[0] > prajurit){
      jarak = arrMusuh[0] - prajurit
      return `your closest enemy ${jarak} space on the right from your position`
    }
    else if(arrMusuh[0] < prajurit){
    jarak = Math.abs(arrMusuh[0] - prajurit)
    return `your closest enemy ${jarak} space on the left from your position`

    // for(let i = 0; i < arrMusuh.length; i++){
    //   arrJarak.push(Math.abs(arrMusuh[i] - prajurit))
    // }
    // console.log(arrJarak)
    // for(let i = )
    // for(let j = 0; j < arrJarak.length; i++){
    }
}
console.log(enemy([1, 0, 0, 0, 2, 2, 2]));
console.log(enemy([0, 0, 0, 0, 2, 1, 0]));
// console.log(enemy([2, 0, 0, 1, 0, 0, 2]));
console.log(enemy([0, 0, 0, 1, 0, 0, 0]));
