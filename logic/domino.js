//your code here
function dominoCard(arr1,arr2) {
  var baru1 = arr1.filter((elemen) => {
    if(elemen[0] == arr2[0]) {
      return true
    }
    else {
      return false
    }
  })

  var baru2 = arr1.filter((elemen) => {
    if(elemen[1] == arr2[1]) {
      return true
    }
    else {
      return false
    }
  })

  console.log(baru1);
  console.log(baru2);

  var status1 = false
  var status2 = false

  for(var i = 0; i < baru1.length; i++) {
    if(baru1[i][1] > arr2[1]) {
      status1 = true
    }
  }

  for(var i = 0; i < baru1.length; i++) {
    if(baru2[i][0] > arr2[0]) {
      status2 = true
    }
  }

  console.log(status1)
  console.log(status2);



}

dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])
