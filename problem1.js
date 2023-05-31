let tab1 = [1,2,3,4,5,6];
let tab2 = [0,3,6,12];
let sum = 0;
let find = false;

for (let i = 0 ; tab1.length-1 ; i++){
    for (let j = 0; tab2.length-1;j++){
        if (tab1[i] === tab2[j]){
            trouve = true;
        }
    }
    if (trouve) {
        sum = sum + tab1[i];
        trouve = false;
    }
}

for (let i = 0 ; tab2.length-1 ; i++){
    for (let j = 0; tab1.length-1;j++){
        if (tab2[i] === tab1[j]){
            trouve = true;
        }
    }
    if (trouve) {
        sum = sum + tab2[i];
        trouve = false;
    }
}

console.log(sum);