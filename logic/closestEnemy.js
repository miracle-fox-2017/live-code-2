//your code here
function closestEnemy (number) {
    let setArr = [];
    let random = Math.floor(Math.random) *2;
    

    for (let i = 0; i < number.length; i++ ) {
        let newArr = [];
       for (let j = 0; j < number[i].length; j++) {
        if (random === 1) {
            setArr.push(number);       
        }  else if (random === 2) {
            setArr[i].push(number[i]);
        }
    }
    return setArr;
}


console.log(closestEnemy())

























