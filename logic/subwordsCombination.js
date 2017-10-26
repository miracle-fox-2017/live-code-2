//your code here
function getCombinations(value) {
	//write your code here
  var arr = []
  var str = ''
  var j = 0
  while(j < value.length) {
    str = ''
    for(var i = j; i < value.length; i++) {
      str = str + value[i]
      arr.push(str)
    }
    j++
  }

  return arr

}

console.log(getCombinations('darwin'));
