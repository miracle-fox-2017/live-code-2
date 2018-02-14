//your code here
function getCombinations(value) {
	//write your code here
  var arr = []
  var arrTemp = []

  for (var i = 0; i <value.length; i++) {
    arr.push(value[i])
    for (var j = 1; j < value.length; j++) {
      arr.push(value.substr(j))
    }
  }
  console.log(arr);
}
getCombinations('cros')
