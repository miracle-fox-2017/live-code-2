//your code here
function getCombinations(value) {
let answer = [];
let kombinasi;
  for (var i = 0; i < value.length; i++) {
      for (var j = 0; j <= i; j++) {
        answer.push(value.slice(j, value.length - i + j))
      }
    }
  console.log(answer.sort());
}


getCombinations('cros');
getCombinations('darwin');
