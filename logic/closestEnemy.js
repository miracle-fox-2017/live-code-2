//your code here
function closestEnemy(arr) {

  //mencari posisi prajurit

  if(arr.indexOf(2) == -1) {
    return 'tidak ada musuh'
  }

  var prajurit = arr.indexOf(1)
  var musuh = []
  // mencari posisi musuh
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == 2) {
      musuh.push(i)
    }
  }

  var jarak = []

  for(var i = 0; i < musuh.length; i++) {
    jarak.push(musuh[i] - prajurit)
  }

  var jarakMinimum = Math.min(...jarak)

  if(jarakMinimum > 0) {
    return `your closestEnemy in ${Math.abs(jarakMinimum)} space right`
  }
  else {
    return `your closestEnemy in ${Math.abs(jarakMinimum)} space left`
  }

}

console.log(closestEnemy([0,0,1,0]));
