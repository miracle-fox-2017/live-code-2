//your code here
function getCombinations(str) {
  let arrCombinations = []

  // return str[0]
  for(let i = 0; i < str.length; i++) {
    // console.log('--> masuk for 1');
    // arrCombinations = []
    for (let j = 1; j < str.length; j++) {
      // console.log('--> masuk for 2');
      if(str.indexOf(str[i]) < str.indexOf(str[j])) {
        // console.log('--> masuk if');
        arrCombinations.push(str.slice(i, j))
      }
    }
  }
  // let test1 = str.indexOf(str[0])
  // let test2 = str.indexOf(str[1])
  // return test1 + ' dan ' + test2
  // let test3 = str.slice(1, 2)
  // return test3
  return arrCombinations
}

console.log(getCombinations('cros'));
// console.log(getCombinations('artic'));
// console.log(getCombinations('darwin'));
