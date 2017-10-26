//your code here
function closestEnemy(arr){
	let heroIndex = arr.indexOf(1)
	let enemyIndex = arr.indexOf(2)
	let newEnemyIndex = 0

	// console.log(enemyIndex);
	if(enemyIndex === -1){
		console.log('There is no enemy');
	}

	if(heroIndex > enemyIndex){
		let dif = heroIndex-enemyIndex
		for(let i=heroIndex; i<arr.length; i++){
			if(arr[i] === 2){
				newEnemyIndex = i
				i=arr.length
			}
		}
		if(newEnemyIndex === 0){
			console.log('Your closest enemy '+dif+' space on the left from your position');	
		}else{
			let newDif = newEnemyIndex-heroIndex 
			console.log('You are surrounded by enemy !!,'+dif+' space on the left, and '+newDif+' space on the right.');
		}		
	}

	if(heroIndex < enemyIndex){
		let dif = enemyIndex-heroIndex
		console.log('Your closest enemy '+dif+' space on the right from your position');	
	}
}

let arr = [1,0,0,0,2,2,2]
let arr1 = [0,0,0,0,2,1,0]
let arr2 = [2,0,0,1,0,0,2]
let arr3 = [0,0,0,1,0]
closestEnemy(arr2)
