function getCombinations(values) {
  let container = []
  for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length + 1; j++) {
          container.push(values.slice(i, j));
      }
  }
    return container;

}
// console.log(getCombinations('cros'));
console.log(getCombinations('artic'));
// console.log(getCombinations('darwin'));
