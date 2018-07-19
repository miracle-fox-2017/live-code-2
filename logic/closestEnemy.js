function closeEnemy(arr) {
    let posPrajurit = arr.indexOf(1)
    let posMusuh = []
    if(arr.indexOf(2)===-1){
      return `There is no enemy`
    }
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === 2){
        posMusuh.push(i)
      }
    }
    let musuhTerdekat = []
    for (var j = 0; j < posMusuh.length; j++) {
      musuhTerdekat.push(Math.abs(posMusuh[j] - posPrajurit))
    }
    for (var i = 0; i < musuhTerdekat.length; i++) {
      if(musuhTerdekat[i] === musuhTerdekat[i+1]){
        return `Your are surounded by enemy !! ${Math.min(...musuhTerdekat)} space on the right and left from your position`
      } else if(musuhTerdekat[i] < musuhTerdekat[i+1]){
        return `Your closed enemy ${Math.min(...musuhTerdekat)} space on the right from your position`
      } else {
        return `Your closed enemy ${Math.min(...musuhTerdekat)} space on the left from your position`
      }
    }

}

console.log(closeEnemy([1,0,0,0,2,2,2]));
console.log(closeEnemy([2,0,0,1,0,0,2]));
console.log(closeEnemy([0,0,0,0,2,1,0]));
console.log(closeEnemy([0,0,0,0,0,1,0]));
