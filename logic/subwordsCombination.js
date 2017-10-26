//your code here
function getCombinations(str){
	let inputStr = str.split('')
	let result = []
	let temp = []
	while(inputStr.length!=0){
		for(let i=0; i<inputStr.length; i++){
			if(i===0){
				temp.push(inputStr[i])
			}else{
				temp.push(temp[i-1]+inputStr[i])
			}
		}
		inputStr.splice(0, 1)
		temp.forEach(output =>{
			result.push(output)
		})
		temp =[]
	}
		console.log(result);
}

getCombinations('cros')