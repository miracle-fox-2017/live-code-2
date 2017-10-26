function words(str) {
  let tam = []
  for (var i = 0; i < str.length; i++) {
    let arr = str.split('')
    tam.push(arr[i],arr[i]+arr[i+1])
  }
  return tam
}
console.log(words('cross'));
