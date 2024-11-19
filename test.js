let num = 63;
console.log(num*"1NNHH");
//var a = BigInt(10);

let str = "aaa";

let cat = {}; // литерал

let Alice = {
    name:"Alice",
    age:20
}

let cat1 = {
    meow: function() {
        console.log("meow");
    }
}

cat1.meow();

delete cat1.meow;

let sheeps = [true,false,true];

let count = 0;

count += (sheeps[0] == true) ? 1 : 0;

for(let i = 0; i < sheeps.length; i++) {
    count += (sheeps[i] == true) ? 1 : 0;
}
console.log(sheeps[0] == true);

console.log(Number([1,2]));
console.log(String([1,2]));

console.log("10a"<="20a");

