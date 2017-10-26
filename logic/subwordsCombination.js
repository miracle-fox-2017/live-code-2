function getCombinations(value) {
	let arr = []
  let tampung = ''
  for(let i = 0; i < value.length; i++){
    for(let j = 0; j <= i; j++){
      tampung += value[j]
    }
    arr.push(tampung)
  }
  return arr
}

console.log(getCombinations('cros'));
console.log(getCombinations('artic'));
console.log(getCombinations('darwin'));
