//your code here
function getCombinations(value) {
    //write your code here
    let arrHasil = []
    
    for(var i = 0; i < value.length;i++){
        let tempWord = ""
        tempWord += value[i]
        arrHasil.push(tempWord)
        for(var j = i+1; j < value.length;j++){
            tempWord += value[j]
            arrHasil.push(tempWord)
        }
    }
    console.log(arrHasil)
} 

getCombinations('artic')