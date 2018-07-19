function dominoCard(card, cardTable) {
  let data = []
  let result = []
  let tampung= []
  for (var i = 0; i < card.length; i++) {
    if(card[i][0]===cardTable[0] || card[i][1]===cardTable[1] || card[i][0]===cardTable[1] ||card[i][1]===cardTable[0]){
      data.push(card[i])
    }
  }
  if(data.length === 0){
    return `tutup 1 kartu`
  } else {
    for (var i = 0; i < data.length; i++) {
      tampung.push(data[i][0]+data[i][1])
    }
  }
  let index = tampung.indexOf(Math.max(...tampung))
  return data[index]
}
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])) //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])) //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]], [1,5])) //”tutup 1 kartu”
