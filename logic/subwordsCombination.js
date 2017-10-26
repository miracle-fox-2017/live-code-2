function getCombinations(value){
  //code
  let result = [];
  let pecah = value.split('')
  let bank = []
  // console.log(pecah);
  for(let i = 0; i<pecah.length; i++){
    let tampung = [];
    for(let j = i; j<pecah.length; j++){
      tampung.push(pecah[j]);
    }
    bank.push(tampung.join(''));
  }
  // console.log(bank);
  
  
  for(let i = 0; i<bank.length; i++){
    let count = 0;
    let tampung = []
    for(let j = i; j<bank[i].length; j++){
      while(count<=j){
        tampung.push(bank[i][count])
        count += 1;
      }
      result.push(tampung.join(''));
    }


  }

  
  
  
  return result;
}

console.log(getCombinations('cros'));
console.log(getCombinations('artic'));
console.log(getCombinations('darwin'));