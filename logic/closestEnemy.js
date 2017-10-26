//your code here

function closesEnemy(arr) {
  let indexPrajurit = arr.indexOf(1)
  let indexMusuh =arr.indexOf(2)
  if (indexPrajurit > indexMusuh){
    let tampung = indexPrajurit - indexMusuh;
    console.log(arr);
    console.log(`Your closesEnemy ${tampung} space on the Left position`);
  }
  else {
    let tampungMusuh = indexMusuh - indexPrajurit;
    console.log(arr);
    console.log(`Your closesEnemy ${tampungMusuh} space on the right position`);

  }
}

closesEnemy([1,0,0,0,0,2,2,2])
