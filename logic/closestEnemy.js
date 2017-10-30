function closestEnemy(arr) {
    let satu = []
    let dua = []
    let hasil = []
    let hasilabs = []
    let jarak;
    let jarakabs;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            satu.push(i)
        } else if (arr[i] == 2) {
            dua.push(i)
        }
    }

    for (let j = 0; j < satu.length; j++) {
        for (let k = 0; k < dua.length; k++) {
            jarak = satu[j] - dua[k]
            hasil.push(jarak)
            jarakabs = Math.abs(satu[j] - dua[k])
            hasilabs.push(jarakabs)

        }
    }
    //console.log(hasil, hasilabs)


    if (hasil.length == 0) {
        return "There is no enemy!"
    } else {
        for (let a = 0; a < hasil.length; a++) {
            if (hasil[a] < 0) {
                return `You are surrounded by enemy!! ${Math.min(...hasilabs)} space on the right side`
            } else if (hasil[a] > 0) {
                return `You are surrounded by enemy!! ${Math.min(...hasilabs)} space on the left side`
            } else {
                return `You are surrounded by enemy!! ${Math.min(...hasilabs)} space on the right and the left side`
            }
        }

    }

}


console.log(closestEnemy([1, 0, 0, 0, 2, 2, 2]))
console.log(closestEnemy([0, 0, 0, 0, 2, 1, 0]))
console.log(closestEnemy([2, 0, 0, 1, 0, 0, 2]))
console.log(closestEnemy([0, 0, 0, 0, 0, 1, 0]))