//your code here
'use strict'

function closestEnemy(num){

//1. angka 1 = prajurit
//2. angka 2 = musuh
//3. angka 0 = jarak
let prajurit = 0,
	musuh = 0,
	jarak = 0
	console.log(num)

	for(let i = 0; i < num.length; i++){
		if(num[i] == 2){
			musuh = i
		}
		else if(num[i] == 1){
			prajurit = i
		}
	}
	
	// console.log(musuh, prajurit)
	jarak = prajurit - musuh
	return Math.ceil(jarak)

}

console.log(closestEnemy([1,0,0,0,2,2,2]))
console.log(closestEnemy([0,0,0,0,2,1,0]))
console.log(closestEnemy([0,0,0,1,0]))