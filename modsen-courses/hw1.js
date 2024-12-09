// Task1 -----------------------------

const obj = { 
    name: 'Object', 
    getName: function () { 
      return this.name; 
    } 
  }; 
  const getName = obj.getName.bind(obj); 
  console.log(getName()); 

// Task2 -----------------------------

function greet () {
    console.log("Hello, " + this.name);
}

const person = { name: 'Alice' }; 

greet.apply(person);
greet.call(person);
const greetLink = greet.bind(person);
greetLink();

// Task 3.1 --------------------------

const sum = (a,b) => a + b;
console.log(sum(2,2))

// Task 3.2 --------------------------

const multiBy2 = (a) => a.map((el) => el*2);
console.log(multiBy2([1,2,3]))

// Task 3.3 --------------------------

const lengthOfStrs = (a) => a.map((el) => el.length)
console.log(lengthOfStrs(["Hello","World!"]))

// Task (Array) 1 --------------------

function findMax(arr) {
    return arr.reduce((maxValue,el) => maxValue = (maxValue < el) ? el : maxValue)
}

const array = [10, 15, 20, 30, 25];
console.log(findMax(array)); // Вывод: 30

// Task (Array) 2 --------------------

function isPrime(num) {
    for (let i = 2; i < num; i++) if(num % i == 0) return false;
    return true;
}

console.log(isPrime(7));   // Вывод: true
console.log(isPrime(9));   // Вывод: false
console.log(isPrime(11));  // Вывод: true

// Task (Array) 3 --------------------

function sumArray(arr) {
    let sum = 0;
    for(let el of arr) sum += el;
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Вывод: 15

// Task (Array) 4 --------------------

function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) newStr += str[i];
    return newStr;
}

console.log(reverseString('hello')); // Вывод: 'olleh'

// Task (Array) 5 --------------------

function countVowels(str) {
    let counter = 0;
    for(let el of str) if(el == "e" || el == "u" || el == "i" || el == "o" || el == "a") counter++;
    return counter;
}

console.log(countVowels('Hello World')); // Вывод: 3