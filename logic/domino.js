//your code here
function getCombinations(value) {
	//write your code here
	let arr = [];
	let valueA = value.split("")
	let result = []
	let temp = ''
	for (let i = 0 ; i<valueA.length ; i++){
		for (let j = i ; j<valueA.length ; j++){
		temp = temp+valueA[j]
		result.push(temp)
		}
		temp = ''
	}
	return result;
} 


console.log(getCombinations('cros'))
// console.log(getCombinations('artic'))
// console.log(getCombinations('darwin'))