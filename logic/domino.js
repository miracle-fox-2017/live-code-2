function dominoCard(inHand, onTable)
{
  let inHandSum = [];
  
  let cardObjArr = [];
  
  let candidate = [];
  
  let largestCard = {card : [], sum : 0};
  
  for (let i = 0; i < inHand.length; i++)
  {
    if (inHand[i][0] === onTable[0] || inHand[i][0] === onTable[1] || inHand[i][1] === onTable[0] || inHand[i][1] === onTable[1])
    {
      candidate.push(inHand[i]);
    }
  }
  
  if (candidate.length === 0)
  {
    return "tutup 1 kartu";
  }
  else
  {
    for (let i = 0; i < candidate.length; i++)
    {
      inHandSum.push(candidate[i][0] + candidate[i][1]);
    }
    
    for (let i = 0; i < candidate.length; i++)
    {
      let cardObj = {card : candidate[i], sum : inHandSum[i]};
      cardObjArr.push(cardObj)
    }
    
    for (let i = 0; i < cardObjArr.length; i++)
    {
      if (cardObjArr[i].sum > largestCard.sum)
      {
        largestCard = cardObjArr[i];
      }
    }
    
    return `keluarkan kartu ${largestCard.card}`
  }
}

console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]));
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])); //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5])); //”tutup 1 kartu”
