function temukanMusuh(arr) {
  let posisi = 0;
  let counter  = 0;
  let kiri = 0;
  let kanan = 0;
    for(let i = 0 ; i < arr.length ; i++) { // perulangan untuk mencari ada tidaknya musuh
      if(arr[i] === 2) {
        counter = counter + 1;
      }
    }
      if(counter === 0) {
        return 'There is no enemy !'
      }

    for(let i = 0 ; i < arr.length ; i++) {
      for(let j = 0 ; j < arr.length ; j++) {
        if(i !== j) {
          if(arr[i] === 1 && arr[j] === 2) {
            if(i > j) {
              posisi = i - j;
              return 'Your closest enemy is ' + posisi + ' space on the left from your current position';
            } else if(i < j) {
              posisi = j - i;
              return 'Your closest enemy is ' + posisi + ' space on the right from your current position';
            }
          }
        }
      }
    }
}

console.log(temukanMusuh([0,1,0,0,2,0,0,0,0]))
console.log(temukanMusuh([0,2,0,0,0,1,0]))
console.log(temukanMusuh([0,0,0,1,0,0,0]))
console.log(temukanMusuh([2,0,0,1,0,0,2]))
console.log(temukanMusuh([2,0,0,0,0,0,1,0,0]))
