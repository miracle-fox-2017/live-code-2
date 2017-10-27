//your code here
function dominoCard(arr, enemyCard) {
  let anwer;
  let tampung = [];
  for (var i = 0; i < arr.length; i++) {
      if (arr[0][i] > enemyCard[0]) {
        tampung.push(arr[i])
    }

  }

  console.log(tampung);
}



dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
