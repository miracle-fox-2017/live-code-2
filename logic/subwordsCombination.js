function getCombinations(word)
{
    let result = [];
    let limit = 1;
    
    for (let i = 0; i < word.length; i++)
    {
      for (let j = i; j < word.length; j++)
      {
        let temp = ''
        for (let k = 0; k < limit; k++)
        {
          temp += word[k]
        }
        result.push(temp);
        limit++;
      }
      limit = 1;
    }
    return result;
}

console.log(getCombinations("cros"));