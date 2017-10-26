//your code here
function dominoCard(nesArr, arr){
	// console.log(nesArr);
	// console.log(arr);
	let check1 = arr[0]
	let check2 = arr[1]
	let tempResult = []
	let indexResult = [0]
	let max_result = 0 

	nesArr.forEach(input =>{
		if(input.indexOf(check1) != -1){
			tempResult.push(input)
		}
		
		if(input.indexOf(check2) != -1){
			tempResult.push(input)
		}
	})

	tempResult.forEach((sum,index)=>{
		indexResult[index] = sum[0]+sum[1]
	})

	// console.log(indexResult);
	if(indexResult[0] != 0){
		var max = indexResult.reduce(function(a, b) {
    		return Math.max(a, b);
		});	
	}

	if(max!=undefined){
		console.log('keluarkan kartu ['+tempResult[indexResult.indexOf(max)]+']');
	}else{
		console.log('tutup 1 kartu');
	}
}

dominoCard([[3,3],[6,5],[3,4],[2,1]], [2,3])