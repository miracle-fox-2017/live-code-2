const getCombination = str => {
  const arrResult = [];

  for (let i = 0; i < str.length; i++) {
    let char = '';
    for (let j = i; j < str.length; j++) {
      char += str[j];
      arrResult.push(char);
    }
  }

  return arrResult;
}

getCombination('cros');