//your code here
function closestEnemy(arr) {
  let prajurit = 1
  let musuh = 2
  let posisiPrajurit = 0
  let posisiMusuh = []
  let posisiMusuhTerdekat = 0

  posisiPrajurit = arr.indexOf(prajurit)

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 2) {
      // posisiMusuh.push(Math.abs(i - posisiPrajurit))
      posisiMusuh.push(i - posisiPrajurit)
    }
  }

  posisiMusuhTerdekat = Math.min(...posisiMusuh) // <-- pke spread operator, pernah diajarkan mas Adi di phase 0
  let print = `Your closest enemy ${Math.abs(posisiMusuhTerdekat)} on the ... from your position`
  // masih bingung bikin kondisi menentukan angka minus dan positif

  return print
}

console.log(closestEnemy([1, 0, 0, 0, 2, 2, 2]));
console.log(closestEnemy([0, 0, 0, 0, 2, 1, 0]));
console.log(closestEnemy([0, 2, 0, 1, 0, 0, 2]));
console.log(closestEnemy([0, 0, 0, 0, 1, 0, 0]));
