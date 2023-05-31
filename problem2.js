function dot_product(v1,v2){
    let ps = 0;
    for (let i=0; v1.length-1 ; i++){
        for (let j=0; v2.length-1 ; j++){
            ps = ps + (v1[i]*v2[j]);
        }
    }
    return ps;
}

let v1 = [1,2,3,4,5];
let v2 = [54,5,6,9];

console.log(dot_product(v1,v2));