
let kata ='cros'
function subWordCombination(str){
  let result=[]
  let tampung=''
  let i=0
  while(i<str.length){


  for(let j=0;j<str.length;j++){
    result.push(str[j])

    for(let k=1;k<str.length;k++){
      result.push()
      result.push(str[j]+str[k])

    }
  }
  i++
  }
  console.log(result);

}

console.log(subWordCombination(kata));
