
const person1 = {
    name: "Alice",
    age: 20,
    city: "New York"
}

Object.seal(person1) // Нельзя Добавлять/удалять свойства

person1.age = 25
person1.apple = true 

console.log(person1)


const person2 = {
    age: 20,
    city: "New York"
}

Object.preventExtensions(person2) // Нельзя Добавлять свойства

person2.age = 25
person2.apple = true 

console.log(person2)


Object.isSealed(person1)
Object.isExtensible(person2)

// Свойства свойств объекта - дескрипторы

//data дескрипторы:
//value

//accessor descreptors:
//writable
//enumerable
//configuratable

console.log("\n")

const person = {
    age: 20,
    city: "New York"
}

//Object.freeze(person) // замораживает поверхностно 

//person.age = 25 // Не изменится

//console.log(person.age) //20

Object.isFrozen(person)

Object.defineProperty(person, "name", {
    value:"Alice",
    writable: false,
    enumerable: true,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(person, "name"))


//Структуры данных -- способ организации однотипных данных

// АТД(абстрактный тип данных) - какие манипуляции необхожимо с нимим произвести

// Массив
// Связанный список (одно-/двусвязный)
// Стек - LIFO
// Очередь - FIFO
// Дерево(Бинарное дерево(Бинарное дерево поиска))
// Граф (узлы связаны ребрами) (Напрваленный и ненаправленный)