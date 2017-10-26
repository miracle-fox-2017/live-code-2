//your code here
const closestEnemy=(array)=>{
    let backEnemy=null;
    let frontEnemy=null;
    const prajuritPos=array.indexOf(1);
    // Cek enemy position
    if(array.indexOf(2) < prajuritPos){
        backEnemy=array.indexOf(2);
        for(let i=0;i < array.length;i++){
            if(array[i] === 2 && i !== backEnemy){
                frontEnemy=i;
            }
        }
    }else{
        frontEnemy=array.indexOf(2);
        for(let i=0;i < array.length;i++){
            if(array[i] === 2 && i !== frontEnemy){
                backEnemy=i;
            }
        }
    }
    // Compare distance
    const jarakBelakang=Math.abs(prajuritPos - backEnemy);
    const jarakDepan=Math.abs(prajuritPos - frontEnemy);
    const hasil=jarakBelakang > jarakDepan ? jarakDepan : jarakBelakang;
    const arah=jarakBelakang > jarakDepan ? "right" : "left";
    console.log(array);
    console.log(`Your closest enemy ${hasil} space on the ${arah} from your position`);
}

closestEnemy([2,0,1,0,0,0,2]);
closestEnemy([2,0,0,1,0,2,0]);
