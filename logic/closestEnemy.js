//your code here
function closestEnemy(arrNumber)
{
  let location1 = arrNumber.indexOf(1);
  let leftPos = -1;
  let rightPos = -1;
  let alert = '';
  
  for (let i = location1; i < arrNumber.length; i++)
  {
    if (arrNumber[i] === 2)
    {
      rightPos = i;
      break;
    }
  }
  
  for (let i = location1; i >= 0; i--)
  {
    if (arrNumber[i] === 2)
    {
      leftPos = i;
      break;
    }
  }
  
  if (leftPos > -1 && rightPos > -1)
  {
    alert = `You are surrounded by enemy!! ${location1 - leftPos} space on the left and ${rightPos - location1} space on the right from your position`
  }
  else if (leftPos === -1 && rightPos === -1)
  {
    alert = `There is no enemy`
  }
  else if (rightPos > -1)
  {
    alert = `Your closest enemy is ${rightPos - location1} space right from your position`
  }
  else if (leftPos > -1)
  {
    alert = `Your closest enemy is ${location1 - leftPos} space left from your position`
  }
  
  return alert;
}


console.log(closestEnemy([ 1, 0, 0, 0, 2, 2, 2 ]));
console.log(closestEnemy([ 0, 0, 0, 0, 2, 1, 0]));
console.log(closestEnemy([ 2, 0, 0, 1, 0, 0, 2]));
console.log(closestEnemy([ 0, 0, 0, 1, 0]));
