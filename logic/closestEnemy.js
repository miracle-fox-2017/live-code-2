const closestEnemy = [1, 0, 0, 0, 2, 2, 2];
// const closestEnemy = [0, 0, 0, 0, 2, 1, 0];
// const closestEnemy = [2, 0, 0, 1, 0, 0, 2];
// const closestEnemy = [0, 0, 0, 1, 0];

let prajurit = 0;
let musuh = [];
for (let i = 0; i < closestEnemy.length; i++) {
  if (closestEnemy[i] === 1) {
    prajurit = i;
  } else if (closestEnemy[i] === 2) {
    musuh.push(i);
  }
}

if (musuh.length === 0) return console.log(`There is no enemy`);

let result = [];
for (let i = 0; i < musuh.length; i++) {
  result.push(musuh[i] - prajurit);
}

let getNegativeValue = 0;
let getPositiveValue = 0;
for (let i = 0; i < result.length; i++) {
  if (result[i] < 0) getNegativeValue++;
  else if (result[i]) getPositiveValue++;
};

if (getNegativeValue === 0) {
  const musuhTerdekat = Math.min(...musuh);
  console.log(`Your closest enemy ${musuhTerdekat} space on the right of your position.`);
} else if (getNegativeValue > 0 && getPositiveValue === 0) {
  const musuhTerdekat = Math.min(...result);
  console.log(`Your closest enemy ${Math.abs(musuhTerdekat)} space on the left of your position.`);
} else {
  console.log(`Your closest enemy ${Math.abs(result[0])} space on both side.`);
}
