//your code here
function dominoCard(arrDeck, arrMeja) {
	let arrSaran = [];

	for (var i = 0; i < arrDeck.length; i++) {
		let kiriDeck = arrDeck[i][0];
		let kananDeck = arrDeck[i][1];

		if (arrMeja[0] == kiriDeck || arrMeja[0] == kananDeck || arrMeja[1] == kiriDeck || arrMeja[1] == kananDeck) {
			arrSaran.push(arrDeck[i]);
		}
	}

	if (arrSaran.length > 1) {
		console.log("keluarkan kartu ["+arrSaran.sort()[arrSaran.length - 1]+"]");
	} else {
		console.log('Tutup 1 kartu');
	}
	
}

dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
