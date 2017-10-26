function getCombinations(value) {
    let hasil = []
    let arrKata = ''
    let kata = value
    let indexKata = 0;
    let arrKata2 = ''
    let arrKata3 = ''


    // while (indexKata < kata.length) {
    for (let i = 0; i < kata.length; i++) {

        arrKata += kata[i]
        hasil.push(arrKata)
    }
    // indexKata++
    // }
    while (indexKata < kata.length) {
        kata = kata.slice(1, kata.length)
        // while (kata.length >= 0) {
            for (let j = 0; j < kata.length; j++) {
                arrKata2 += kata[j]
                hasil.push(arrKata2)
                indexKata++
            // }
        }

    }


    // kata = kata.slice(1, kata.length)
    // for (let k = 0; k < kata.length; k++) {
    //     arrKata3 += kata[k]
    //     hasil.push(arrKata3)
    // }




    return hasil;

}

console.log(getCombinations('cros'))
console.log(getCombinations('artic'))
console.log(getCombinations('darwin'))
