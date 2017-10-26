//your code here
function dominoCard(arr,arr2){
	let totalCard = []
	let tempResult = 0
	let result = null
	for (let i = 0; i<arr.length ; i++){
		let total = 0;
		for (let j = 0 ; j<arr[i].length ; j++){
			total = total + arr[i][j]
		}
		totalCard.push(total)
	}
	for (let i = 0 ; i<arr2.length ; i++){
		for (let j = 0 ; j<arr.length ; j++){
			if (arr[j].indexOf(arr2[i]) !== -1){
				if (totalCard[j] > tempResult){
					tempResult = totalCard[j]
					result = j
				}
			}
		}
	}
	if (result === null){
		return "tutup 1 kartu"
	}
	return "keluarkan kartu ["+arr[result]+"]"
}

console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])) //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])) //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5])) //”tutup 1 kartu”
