//your code here
function dominoCard(arr, arrDeckMeja) {
    let arrHasil = []
    let hasil
    let hasilJumlah = []
    let hasilMax =0
    let arrJumlah
    
    for (let i = 0; i < arrDeckMeja.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arrDeckMeja[i] == arr[j][k]) {
                    arrHasil.push(arr[j])
                }
            }
        }
    }
    // 


    if (arrHasil.length == 0) {
        return "Tutup kartu"
    } else {
        for (let i = 0; i < arrHasil.length; i++) {
            hasil = arrHasil[i][0] + arrHasil[i][1]
           if(hasil > hasilMax){
              hasilMax = hasil;
              arrJumlah = arrHasil[i]
           }

        }
        return `Keluarkan kartu [${arrJumlah}]`
    }
   
    


}

console.log(dominoCard([[3, 3], [6, 5], [3, 4], [2, 1]], [3, 5])) //”keluarkan kartu [6,5]”
console.log(dominoCard([[3, 3], [6, 5], [3, 4], [2, 1]], [1, 3])) //"keluarkan kartu [3,4]"
console.log(dominoCard([[2, 4], [6, 6], [3, 6]], [1, 5])) //”tutup 1 kartu”
