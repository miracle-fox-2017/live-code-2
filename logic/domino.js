function dominoCard(hands, deck){
  let match = []
  for(let i = 0; i < hands.length; i++){
    if(hands[i][0] === deck[0] || hands[i][0] === deck[1] || hands[i][1] === deck[0] || hands[i][1] === deck[1]){
      match.push(hands[i])
    }
  }
  // console.log(match);
  if(match == 0){
    return 'tutup 1 kartu';
  }
  let biggest = []
  for(let j = 0; j < match.length; j++){
    biggest = match[1]
    if(match[j][0] + match[j][1] > biggest[0] + biggest[1]){
      biggest = []
      biggest.push(match[j])
    }
  }
  
  return 'keluarkan kartu ' + biggest;
}



console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])) //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])) //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5])) //”tutup 1 kartu”