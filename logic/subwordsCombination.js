function getCombinations(value, hasil = []) {
    // let hasil = []
    let arrKata = ''
    //let kata = value
    let indexKata = 0;
    let arrKata2 = ''
    let arrKata3 = ''


    if (value.length > 0) {
        for (let i = 0; i < value.length; i++) {
            arrKata += value[i]
            hasil.push(arrKata)
        }
        return getCombinations(value.slice(1, value.length), hasil)
    }
    return hasil;

}

console.log(getCombinations('cros'))
console.log(getCombinations('artic'))
console.log(getCombinations('darwin'))
