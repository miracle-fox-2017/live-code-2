//your code here


//closet enemy

function closetEnemy(arr){
let result = 0;
let cari1 = 0;
let cari2 = [];
let array = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 1){//posisis1
      cari1 += i
    }
    if(arr[i] == 2){//posisis2
      cari2.push(i)
    }
  }
  if(cari2[0] > cari1){
    array.push(cari2[0] - cari1)
    return 'you closet ' + array + ' space'
  }
  if(cari1 > cari2[0]){
    array.push(cari1 - cari2[0])
    return 'you closet ' + array + ' space'
  }
 if(cari2[0]< cari1 && cari2[1] > cari1){
    array.push(cari1 - cari2[0], cari2[1] - cari1)
  }
  if(arr.indexOf(2) == -1){
    return "no enemy"
  }
}
console.log(closetEnemy([1,0,0,0,2,2,2]));//4
console.log(closetEnemy([0,0,0,0,2,1,0]));//1
console.log(closetEnemy([2,0,0,1,0,0,2]));//3kiri & 3 kanan
console.log(closetEnemy([0,0,0,1,0]));//no enenmy
