//your code here
function closestEnemy(arrPos) {
	let posIdxSoldier = 0;
	let posIdxEnemy = [];
	let posIdxEnemyName = [];
	let closestPos = [];

	for (var i = 0; i < arrPos.length; i++) {

		if (arrPos[i] == 1) {
			posIdxSoldier = i;
		}

		if (arrPos[i] === 2) {
			posIdxEnemyName.push([arrPos[i],i]);
			posIdxEnemy.push(i);
		}
	}

	// console.log(posIdxSoldier);
	// console.log(posIdxEnemy);

	for (var j = 0; j < posIdxEnemy.length; j++) {
		closestPos.push(Math.abs(posIdxSoldier - posIdxEnemy[j]));
	}

	// console.log(closestPos);

	if (closestPos.length !== 0) {
		let checkSame = closestPos.reduce(function(a, b){ return (a === b) ? true : false; });
	
		if (checkSame == true && closestPos.length > 1) {
			return 'You are surrounded by Enemy!! '+closestPos[0]+' space on the left and the right side';
		} else if (posIdxSoldier > closestPos[0]) {
			return 'Your closest enemy '+closestPos[0]+' space on the left from your posisiton';
		} else {
			return 'Your closest enemy '+closestPos[0]+' space on the right from your posisiton';
		}
	} else {
		return 'There is no Enemy';
	}
}

let pos1 = [1,0,0,0,2,2,2];
let pos2 = [0,0,0,0,2,1,0];
let pos3 = [2,0,0,1,0,0,2];
let pos4 = [0,0,0,1,0];

console.log(closestEnemy(pos4));