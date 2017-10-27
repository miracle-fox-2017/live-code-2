//your code here
function subSword(str){
  let combin = []
  let arrStr = str.split('')
  let sub = ''
   for(let i = 0; i < arrStr.length; i++){
     sub+=arrStr[i]
     combin.push(sub)
   }
  //console.log(combin)
  let sub1 = ''
  for(let i = 1; i < arrStr.length; i++){
    
    sub1+=arrStr[i]
    combin.push(sub1)
    arrStr.shift()
    i--
  }


  console.log(combin)
}

subSword('cros')
