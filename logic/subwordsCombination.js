//your code here
'use strict'

function getCombinations(str, arr = []){

	if(str.length == 1){
		return arr
	}
	else{
		// console.log(str)

		for(let i = 0; i < str.length; i++){
			// console.log(str[i])
			let huruf = ''
			for(let j = 0; j <= i; j++){
				huruf += str[j]
			}
			
			arr.push(huruf)
			
		}
		
		return getCombinations(str.slice(1), arr)
	}

}


console.log(getCombinations('cros'))