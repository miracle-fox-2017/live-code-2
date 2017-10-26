//your code here
function getCombination(words){
	let arrResult = [];
	let counterStart = words.length;
	let start = 0;
	let arrNextPos = [];

	while(counterStart > 0) {
		for (var i = 0; i < words.length; i++) {
			arrNextPos.push(words[counterStart])
		}

		counterStart--;
	}

	console.log(arrNextPos);
}

function getStepWord(word) {
	let oldPos = [];
	let length = word.length;

	for (var i = 0; i < word.length - 1; i++) {
		if (i == 0) {
			oldPos.push(word[i+1])
		} else {
			oldPos.push(word[i].concat(word[i+1]));
		}
		
	}

	console.log(oldPos);	
	let tempArr = [];

	for (var j = 0; j < oldPos.length - 1; j++) {
		tempArr.push("c"+oldPos[j])
	}

	tempArr.unshift('c')
	
	
	return tempArr.push(word);;
}

getStepWord('cros');

// console.log(getCombination('cros')); 

// ["c", "cr", "cro", "cros", "r", "ro", "ros", "o", "os", "s"]
