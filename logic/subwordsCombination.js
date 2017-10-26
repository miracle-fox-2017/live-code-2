function getCombinations(value){
  //code
  let result = [];
  let pecah = value.split('')
  // console.log(pecah);
  for(let i = 0; i<pecah.length; i++){
    let tampung = [];
    let count = 0;
    for(let j = i; j<pecah.length; j++){
      while(count<i){
        tampung.push(pecah[j])
        count++;
      }
      console.log(tampung);
    }
  }
  
  
  
  return result;
}

console.log(getCombinations('cros'));