// function close(number){
//     let getArray = [];
    
//     let arrayAcak = [0,1,2]
//     // console.log(randomNilai);
//     for (let i = 0; i < number;i++){
//         let randomNilai = Math.floor(Math.random() * 3);
//         if (randomNilai === 1 || getArray.indexOf(1) > -1){
            
//                 getArray.push(randomNilai);
            
//         } else if (randomNilai === 2){
//             getArray.push(randomNilai);
//         } else{
//             getArray.push(randomNilai);
//         }
//     }
//     return getArray;
// }

function cariMusuh(number){
    let setBoard = [0,0,0,1,0,2,0];
    let simpanSatu = [];
    let simpanDua = [];
    let jarakTerdekat = 0;
    console.log(setBoard);
    for (let i = 0; i < setBoard.length;i++){
        if (setBoard[i] === 1) {
            simpanSatu.push(i);
        } else if (setBoard[i] === 2){
            simpanDua.push(i);
        }
    }

    if (simpanDua.length > 1){
        if (simpanDua[0] < simpanSatu[0] && simpanDua[1] > simpanSatu[0]) {
                let dataKiri = simpanSatu[0] - simpanDua[0] 
                let dataKanan = simpanDua[1] - simpanSatu[0]
            console.log(`Maaf Musuh Ada dikiri ${dataKiri}  dan kanan ${dataKanan}`);
        }else{
            if (simpanDua[0] > simpanSatu[0]) {
                let dataKanan = simpanDua[0] - simpanSatu[0]
                console.log(`Maaf Musuh di kanan ${dataKanan}`);
            } else if (simpanDua[0] < simpanSatu[0]) {
                let dataKiri = simpanSatu[0] - simpanDua[0]
                console.log(`Maaf Musuh dikiri ${dataKiri}`);
            } else if (simpanDua.length === 0) {
                console.log('Maaf Musuh Tidak Ada');
            }
        }   
    }else{
        if (simpanDua[0] > simpanSatu[0]) {
            let dataKanan = simpanDua[0] - simpanSatu[0]
            console.log(`Maaf Musuh di kanan ${dataKanan}`);
        } else if (simpanDua[0] < simpanSatu[0]) {
            let dataKiri = simpanSatu[0] - simpanDua[0]
            console.log(`Maaf Musuh dikiri ${dataKiri}`);
        } else if (simpanDua.length === 0) {
            console.log('Maaf Musuh Tidak Ada');
        }  
    }

    
}

cariMusuh();



/*masih Ada Bug*/