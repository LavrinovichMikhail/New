let greet1 = function greet() {

}

//Глаголы
//Конкретика
//camelCase

function firstFoo(name) { //name - Параметр

}

let myName = "Misha"
firstFoo(myName); //myName - Аргумент

function add(...nums) {
    return nums;
}

console.log(add(2,3,4,5)); // []

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; //

console.log(arr2);

const user = {
    name: "Alice",
    sayHello: function () {
        console.log("My name is " + this.name); // Контекст выполнения функции
    } 
}

const admin = {
    name: "Admin"
}

const adminHello = user.sayHello.bind(admin)
adminHello()
// const greet2 = user.sayHello // Потеря контекста
// greet2()

function showName (arg) {
    console.log(`${arg}, ${this.name}`)
}

showName.call(user,"bye")// аргументы перечеслением
showName.apply(user,["bye"])// массив из аргументов

const boundFunc = showName.bind(user)
boundFunc("bye");

const newUser = Object.assign({},user)
newUser.name = "David";

console.log(newUser.name);
newUser.sayHello();

console.log("\n");

const userProfile = {
    name: "Алексей",
    age: 25,
    distance: 100,

    updateAge(newAge) {
        this.age = newAge;    
        console.log("Мой возраст теперь "+ this.age);
    },

    updateDistance() {
        console.log(this.name + " " + this.distance + " м от Вас")
        this.distance = this.distance > 10 ? this.distance - 10 : this.distance;
    },

    showInfo() {
        console.log("Моё имя " + this.name);
        console.log("Мой возраст " + this.age);
    }
}

userProfile.showInfo();
userProfile.updateAge(30);
userProfile.updateDistance();
userProfile.updateDistance();
userProfile.updateDistance();

function showThis() {
    console.log(this);
}

showThis()