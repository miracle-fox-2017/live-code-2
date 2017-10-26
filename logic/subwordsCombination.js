function getCombinations(word)
{
    let result = [];
    let limit = 1;
    
    for (let i = 0; i < word.length; i++)
    {
      for (let j = i; j < word.length; j++)
      {
        result.push(word[j])
      }
    }
    return result;
}

console.log(getCombinations("cros"));