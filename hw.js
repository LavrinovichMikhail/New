let array = [];
for(let i = 0; i < 50; i++) {
    array.push(Math.trunc((Math.random() * 10)));
    console.log(array[i]);
}
let array2 = [];
let array3 = [];
for(let i = 0; i < 5; i++) {
    array2.push(Math.trunc((Math.random() * 10)));
    console.log(array2[i]);
}
for(let i = 0; i < 55; i++) {
    array3.push(array2[i]*2);
    console.log(array3[i]);
}
