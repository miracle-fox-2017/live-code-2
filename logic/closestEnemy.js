
function closestEnemy(arr) {

    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        let a = '';
        if (arr[i] === 1) {
            a = arr[i];
            b = Math.floor(arr.length / 2)

            if (i < b) {
                for (let j = a; j < arr.length; j++) {
                    counter++
                    if (arr[j] === 2) {
                        return `Your closest Enemy ${counter} space on the rigth from your position` ;
                    }
                }
            }
            else {
                for (let j = a; j > 0; j--) {
                    counter++
                    console.log(arr[j]);
                    if (arr[j] === 2) {
                        return `Your closest Enemy ${counter} space on the left from your position`
                    }
                }
            }
        }
          return `there is no enemy`

    }

}

console.log(closestEnemy([1, 0, 0, 0, 2, 2, 2, ])); // 4
console.log(closestEnemy([0, 0, 0, 0, 2, 1, 0])); //
console.log(closestEnemy([ 0, 0, 1, 0]))//your code here
