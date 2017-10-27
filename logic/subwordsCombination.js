function words(str) {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    let kos = ''
    for (let j = i; j < str.length; j++) {
      kos+=str[j]
      arr.push(kos)
    }
  }
  return arr
}

console.log(words('cross'));
