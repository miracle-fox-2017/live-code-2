//your code here

let count = 0;

function closest(arr) {
  let answer;
  for (let x = 0; x < arr.length; x++){
    if (arr.indexOf(2) == -1) {
      answer = 'There is no enemy'
    } else if (arr.indexOf(2) != -1) {
      checkKanan(arr);
    }
    return answer;
  }
}

function checkKanan(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count++;
    }
  }
  return count+1;
}


console.log(closest([1, 0, 0, 0, 2, 2, 2]));
console.log(closest([0, 0, 0, 1, 0]));
