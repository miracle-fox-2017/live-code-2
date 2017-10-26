//your code here
const dominoCard=(nestedArr,check)=>{
    let tempArr=[];
    for(let i=0;i < nestedArr.length;i++){
        for(let j=0;j < nestedArr[i].length;j++){
            if(nestedArr[i][j] === check[0]){
                tempArr.push(nestedArr[i]);
            }else if(nestedArr[i][j] === check[1]){
                tempArr.push(nestedArr[i]);
            }
        }
    }
    const getHighest=(array)=>{
        let penjumlahan={};
        for(let i=0;i < tempArr.length;i++){
            const jumlahkan=tempArr[i].reduce((a,b)=>{return a + b});
            penjumlahan[i]=jumlahkan
        }
        const index=Object.keys(penjumlahan).reduce((a,b)=>{
            return penjumlahan[a] > penjumlahan[b] ? a : b;
        });
        return index
    }
    const hasil=tempArr.length === 0 ? "Tutup 1 kartu" : tempArr[getHighest(tempArr)];
    console.log(hasil);
}

dominoCard([[3,3],[6,5],[3,4],[2,1]],[3,5]);
dominoCard([[3,3],[6,5],[3,4],[2,1]],[1,3]);
dominoCard([[2,4],[6,6],[3,6]],[1,5]);
