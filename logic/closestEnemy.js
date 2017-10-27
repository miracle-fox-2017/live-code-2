function enemy(arr) {
  let enemy = '2';
  let hero = '1';
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == hero && arr[i] == enemy){
        num++//harusnya si num ini akan bertmabah klo bertemu si musuh atau hero
    }
  }
  console.log(num);
  return `musuh ada ${num}`
}




console.log(enemy(['1','0','0','2','2','2']));
// console.log(enemy([0,0,2,1,0]));
// console.log(enemy([2,0,0,1,0,0,2]));
// console.log(enemy(['0','0','0','1','0']));
