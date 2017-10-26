function closestEnemy(arr) {
    let satu = []
    let dua = []
    let hasil = []
    let jarak;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            satu.push(i)
        } else if (arr[i] == 2) {
            dua.push(i)
        }
    }

    for (let j = 0; j < satu.length; j++) {
        for (let k = 0; k < dua.length; k++) {
            jarak = Math.abs(satu[j] - dua[k])
            hasil.push(jarak)
        }
    }


    if (hasil.length == 0) {
        return "There is no enemy!"
    } else {
        return `You are surrounded by enemy!! ${Math.min(...hasil)} space on the right and the left side`
    }

}


console.log(closestEnemy([1, 0, 0, 0, 2, 2, 2]))
console.log(closestEnemy([0, 0, 0, 0, 2, 1, 0]))
console.log(closestEnemy([2, 0, 0, 1, 0, 0, 2]))
console.log(closestEnemy([0, 0, 0, 0, 0, 1, 0]))