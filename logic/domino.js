//your code here
'use strict'
function dominoCard(card){
	let kartu = card[1].sort(),
		terbesar = kartu[1],
		hasil = []

	for(let i = 0; i < card[0].length; i++){
		
		for(let j = 0; j < card[0][i].length; j++){

			if(card[0][i][j] == terbesar && j > 0){
				hasil.push(card[0][i])
			}
			else if(card[0][i][j] == card[0][i][j+1] && card[0][i][j] > terbesar){
				hasil.push(card[0][i])
			}
		}
	}

	console.log(hasil)

}

dominoCard([[[3,3],[6,5],[3,4],[2,1]],[3,5]]) //keluarkan kartu 6,5
dominoCard([[[3,3],[6,5],[3,4],[2,1]],[1,3]]) //keluarkan kartu 6,5
dominoCard([[[2,4],[6,6],[3,6]],[1,5]]) //tutup 1 kartu
