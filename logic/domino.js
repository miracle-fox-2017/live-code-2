//your code here
function dominoCard(value, target){
    var buntut = value
    var tinggi = value [0][1]
    let arrKos = []
    for(var i = 0; i < value.length;i++){
        
            if(value[i][0] == target[0] || value[1]){
                let hasil = value[i][0] + value[i][1]
                if(hasil > target[0] + target[1]){
                    arrKos.push(value[i])
                }
            }
                

        

    }
    let hasilAkhir = []
    console.log(arrKos)
    for(var j = 0; j < arrKos.length;j++){
        if(arrKos[j][1] == target[1]){
            hasilAkhir.push(arrKos[j])
        }
    }
    if(hasilAkhir.length > 0){
        console.log(`keluarkan kartu ${hasilAkhir}`)
    }
    else{
        console.log(`tutup 1 kartu`)
    }
    
}











dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
