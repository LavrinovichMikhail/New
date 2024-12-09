//Прототипы и наследование

//Prototypes

const object = {
    a: 2
}

//Создаем объект, привязанный к object
const myObject = Object.create(object) // Object.create(proto, propertiesObject)

console.log(myObject.a)

//null - Конец цепочки прототипов

console.log(Object.prototype.toString())

console.log(Object.getOwnPropertyNames(Array.prototype))



console.log("\n")

const proto = {
    greet: function() {
        return `Hello, ${this.name}`
    }
}

const obj = Object.create(proto)

obj.name = "Alice"
console.log(obj.greet())

//Прототипы/proto
console.log({}.__proto__ === Object.prototype) // Proto - Ссылка на prototype

const animal = {
    speak: function() {
        console.log("Speaking...\n")
    }
}

const dog = {
    bark: function() {
        console.log("Barking...\n")
    }
}

dog.__proto__ = animal // Равносильно Object.setPrototypeOf(dog, animal)

dog.bark() // Собственный метод
dog.speak() // Унаследованный метод

console.log(Object.getPrototypeOf(dog)) 

const emptyObj = Object.create(null)

console.log('\n')


//Использование всех методов работы с протатипами:

const parent = {
    greet: function() {
        console.log("Greet\n")
    }
}

const child = Object.create(null)
Object.setPrototypeOf(child,parent)

console.log(Object.getPrototypeOf(child) === parent)

child.greet()


//Функиции-Констуркторы 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Alice', 30)
console.log(person1.age)
console.log(person1.name)

console.log('\n')

function Proto(action) {
    this[action] = function () {
        console.log(action + "...")
    }
}

//или

Proto.prototype.sayHi = function () {
    console.log("Hi")
}

const animalProto = new Proto("Greet")

animalProto.sayHi()
animalProto.Greet()

console.log(animalProto)
// const humanProto =  animalProto.constructor("Speak")

// humanProto.Speak()
console.log('\n')

//Статические свойства и методы

function Car(make, model) {
    this.make = make
    this.model = model
}

Car.isCar = function (obj) {
    return obj instanceof Car;
}

Car.wheels = 4

const myCar = new Car('Toyota','Camry')
console.log(Car.isCar(myCar))
console.log(myCar.isCar)
console.log(Car.wheels)
console.log(myCar.wheels)

//ООП

//Абстракция
//Полиморцизм
//Наследование
//Инкапсуляция