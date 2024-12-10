//Задание 1

const Vechicle = {
    type: "Автомобиль",
    move(){
        console.log(`${this.type} движется.`)
    }
}

const Car = Object.create(Vechicle)
Car.type = "машина"
Car.move = function(){
    console.log(`${this.type} едет.`)
}

Car.move()

console.log("\n")

//Задание 2

function Person (name, age) {
    this.name = name
    this.age = age
    this["greet"] = function (){
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`)
    }
}

const person1 = new Person("Alice",25)
const person2 = new Person("Bob",30)

person1.greet()
person2.greet()

console.log("\n")

//Задание 3

class MathHelper {
    static add(a,b) {
        return a + b;
    }

    static substract(a,b) {
        return a - b;
    }

    static multiply(a,b) {
        return a * b;
    }
}

console.log(MathHelper.add(2,3))

console.log(MathHelper.substract(2,3))

console.log(MathHelper.multiply(2,3))