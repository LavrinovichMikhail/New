function createMultiplier(factor) {
    return function (num) {
        return num * factor;
    }
}

const doubler = createMultiplier(2);

console.log(doubler(3))

//greet();

function greet() {
    console.log("Hello world")
}

//function decloration

// let greet = function() {
//     console.log("Hello world")
// }
// ReferenceError!
//Function expression

function greetUser(callback) {
    console.log(callback("Hello world"))
}

// let greet = function foo() {
//         console.log("Hello world")
// } 

//named function expression

let factorial = function fact(n) {
    if(n <= 1) return 1;
    return n * fact(n-1);
} //NFE - Доступна только внутри функции (для рекурсии)

const user = {
    name: "Alice",
    sayHello: () => {
        console.log("My name is " + this.name); // Контекст выполнения функции - Глобальный (вне объекта)
    } 
}

const admin = {name: "Bob"};

const newSayHi = user.sayHello; 

newSayHi.apply(admin); //Контекст уже определен

(function (num1, num2) {
    console.log(num1*num2);
})(2,6) //IIFE

function* generatorExemple () {
    yield 1;
    yield 2;
}//generator - Асинхронное програмирование без рекурсии

const gen = generatorExemple();

console.log(gen.next().value)//1
console.log(gen.next().value)//2


console.log("\n")


function* generateNumbers () {
    for(let i = 0;; i++)
        yield i;
}

let infNums = generateNumbers()

console.log(infNums.next().value)
console.log(infNums.next().value)
console.log(infNums.next().value)
console.log(infNums.next().value)

function orderPizza() {
    return function (topping) {
        return function (sauce) {
            return `Ваша пицца: ${sauce} + ${topping}`
        }
    }
}//Карирование

console.log(orderPizza()("Сыр")("Кетчуп"))
