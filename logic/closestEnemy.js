//your code here
function closeEnemy(arr){
	let tempPrajurit ;
	let musuh = []
	let tempJarak = 9999;
	let position ;
	for (let i = 0 ; i<arr.length ; i++){
		if (arr[i] === 1){
			tempPrajurit = i;
		}
		if (arr[i] === 2){
			musuh.push(i)
		}
	}
	if (musuh.length == 0){
		return "there is no enemy"
	}
	for (let j = 0 ; j<musuh.length ; j++){
		let temp = Math.abs(tempPrajurit-musuh[j])
		if (temp < tempJarak){
			tempJarak = temp
		}
	}

	if (tempJarak < tempPrajurit ){
		position = "left";
	}

	if (tempJarak > tempPrajurit){
		position = "right";
	}

	if (tempJarak === tempPrajurit){
		return "You are surrounded by enemy !!  " +tempJarak+" space on the left and right side";
	}
	return  "Your closest enemy "+tempJarak+" space on the "+position+" from your position"
}

console.log(closeEnemy([1,0,0,0,2,2,2]))
console.log(closeEnemy([0,0,0,0,2,1,0]))
console.log(closeEnemy([2,0,0,1,0,0,2]))
console.log(closeEnemy([0,0,0,0,0,1,0]))
