function getCombinations(value) {
  let result = []
  let idx = 0
  while(idx < value.length){
    for (var i = idx; i < value.length; i++) {
      let temp = []
      temp.push(value[i])
      if(i-1 >= idx){
        for (var j = i-1; j >= idx; j--) {
          temp.unshift(value[j])
        }
      }
      result.push(temp.join(''))
    }
    idx++
  }
  return result
}


console.log(getCombinations('cros'));
