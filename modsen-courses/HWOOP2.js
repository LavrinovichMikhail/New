//Task 1

class Book {
    constructor (name, author) {
        this.name = name
        this.author = author
    }
    getBookInfo() {
        return this.name + ", " + this.author
    }
}

const book1 = new Book("LOR", "Tolkien")
console.log(book1.getBookInfo())

//Task 2

class Person {
    #name
    #age
    constructor(name, age) {
        this.#age = age
        this.#name = name
    }
    get name() {
        return this.#name
    }
    get age() {
        return this.#age
    }
}

//Task 3

class Animal {
    name
    age

    constructor (name, age)
    {
        this.name = name
        this.age = age
    }

    get info() {
        return `My name is ${this.name}, I'm ${this.age} years old`
    }

    greet() {
        return "some mesagge"
    }
}

class Dog extends Animal{
    constructor(name, age) {
        super(name, age)
    }
    greet() {
        return "Whof whof!"
    }
}

const dog1 = new Dog("Bob", 3)

console.log(dog1.info)
console.log(dog1.greet())