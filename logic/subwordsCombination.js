function getCombinations(value) {
  let result = []
  for (let i = 0; i < value.length; i++) {
      for (let j = i + 1; j < value.length + 1; j++) {
          result.push(value.slice(i, j));
      }
  }
    return result;
  // return result.length;
}
console.log(getCombinations('cros'));
console.log(getCombinations('artic'));
console.log(getCombinations('darwin'));
