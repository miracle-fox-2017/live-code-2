function dominoCard(arr,value) {
  var angka = 0
  var angkaditangan = 0
  var counter =0
  for (var i = 0; i < arr.length; i++) {
    if (arr[0] == value[0] || arr[0] == value[1] || arr[1] == value[0] || arr[1] == value[1]){

      let tambahkartu = arr[0]+arr[1]
      counter = counter +1
      if(counter > 1){

        if (tambahkartu > angka){
          // console.log(angka);
          return console.log("Keluarkan Kartu" + arr[i]);
        }

      }
      else {
        console.log(angka);
        angka = tambahkartu
      }

      // else {
      //   return console.log("tutup 1 Kartu");
      }
    }
    return console.log("tutup 1 Kartu")
  }

dominoCard([[3,3],[6,5],[3,4],[2,1]],[3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]],[1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
