//your code here
const getCombinations=(word)=>{
    let hasil=[];
    for(let i=0;i < word.length;i++){
        for(let j=i;j < word.length;j++){
            hasil.push(word.slice(i,j + 1));
        }
    }
    console.log(hasil);
}

getCombinations("cros");
getCombinations("artic");
getCombinations("darwin");
