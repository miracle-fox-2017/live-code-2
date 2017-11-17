//your code here
function closestEnemy(arr){
    if(arr.indexOf(2) == -1){
        console.log(`there are no enemies`)
    }
    else{
        let arr2 = []
        for(var i = 0; i < arr.length;i++){
            if(arr[i] == 2){
            arr2.push(i)
            }
        }
        console.log(arr2)
        // for(var j = 0; j < arr2.length;j++){
        var distance = arr.indexOf(2) - arr.indexOf(1)
        
        
        if(distance > 0){
        console.log(`the enemy is ${distance} spaces on your right`)
        }
        else{
        console.log(`the enemy is ${distance} spaces on your left`)
        }
    }
}
closestEnemy([1,0,0,2,2])
closestEnemy([2,0,0,1])