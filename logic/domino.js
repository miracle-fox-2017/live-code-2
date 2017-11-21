//your code here
function dominoCard () {
    let kartuPertama = 0;
    let kartuKedua = 0;
    let board = [];
  
    for (let i = 0; i < 2 ; i++) {
      let row = [];
      for (let j = 0; j < 2; j++) {
        let random = Math.random();
  
        if (random < 0.3 && kartuPertama < 2) {
          xCount++;
          row.push("x");
        } else if (oCount < 2) {
          oCount++;
          row.push("y");
        } else {
          row.push("x" || "y");
        }
        
      }
      board.push(row);
    }
  
    return board;
  }
  
  console.log(dominoCard()) 