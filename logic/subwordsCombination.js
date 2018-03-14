function kombinasiKata(str) {
  let kata = '';
  let hasil = '';
  let arr = [];
  for(let i = 0 ; i < str.length ; i++) {
    for(let j = i ; j < str.length ; j++) {
      kata = kata + str[j];
      arr.push(kata);
    }
    kata = '';
  }
  return arr;
}

console.log(kombinasiKata('Ivon')); // ['I','Iv','Ivo','Ivon','v','vo','von','o','on','n']
console.log(kombinasiKata('rent'));
console.log(kombinasiKata('Wild'));

// YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
