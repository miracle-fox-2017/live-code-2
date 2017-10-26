//your code here
function closestEnemy(arr) {
  let simpanarr = [];
  // let angka = [ 0,1,2]

  for (var i = 1; i <= 1; i++) {
    let prajurit = 1;
    let musuh = 2;
    let jarak = 0;
    //simpanarr.push(0)

    if (arr == prajurit) {
      simpanarr.push(prajurit,jarak,jarak,jarak ,musuh,musuh,musuh)
      console.log('your closes Enemy 4 space on  the laft from your position');

    }
    if (arr == musuh) {
      simpanarr.push(jarak,jarak,jarak,jarak ,musuh,prajurit,jarak)
      console.log('your space on 1  the laft from your position');
    }
    if (arr == 3) {
      simpanarr.push(musuh,jarak,jarak,prajurit ,jarak,jarak,musuh)
      console.log('your 3 space on  the laft from your position');
    }
    if (arr == 4) {
      simpanarr.push(jarak,jarak,jarak,jarak ,prajurit,jarak)
      console.log('there not Enemy');
    }
  }

  return simpanarr

}

console.log(closestEnemy(1));
console.log(closestEnemy(2));
console.log(closestEnemy(3));
console.log(closestEnemy(4));
