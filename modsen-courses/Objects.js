const user = {
    name: "Оля"
} // Ассоциативный массив - объект (ключи - названия свойств)

const myObj = new Object({name:"bob"});

console.log(myObj)

//Создание свойства
myObj.age = 25;
myObj[true] = "yes"

console.log(myObj)

//Объекты - ссылочный тип

//Обращение
console.log(myObj.age)
console.log(myObj["age"])
console.log(myObj["true"])//Только через название


car = {
    id: "123",
    specifications: {
        color: "blue"
    }
}

console.log(car.specifications.color)

//Удаление свойств
delete myObj["true"]

console.log("age" in myObj)//true или false - есть ли такое свойство

const {name, age} = myObj

//== 
//const name = myObj.name 
//const age = myObj.age
// - Деструктуризация

console.log("Hello".toUpperCase()) // String - объект обертка для примитива "Hello"

//По факту - new String("Hello") 

console.log('\n')


console.log(Object.keys(myObj))
console.log(Object.values(myObj))
console.log(Object.entries(myObj))

console.log('\n')

const products = {
    "apple":10,
    "coockie":12,
    "cake":20
}

console.log(Object.keys(products))
for(el of Object.entries(products)) {
    console.log("Товар: "+el[0] + ", цена: "+ el[1])
}

//From entries

const entries = [["name","Alice"],["age",20]]
const Alice = Object.fromEntries(entries)

console.log('\n')

const filteredProducts = Object.fromEntries(Object.entries(products).filter(([key,value]) => value > 10))

//Assign

const original = {
    name: "Alice",
    adress: {
        city: "New York"   
    }
}

const copy1 = Object.assign({},original) //Если изменить copyOfOriginal.city - original.city тоже изменится, копируется первый уровень
const copy2 = {...original}; //Тоже поверхностное копирование

copy2.adress.city = "Ohio"
console.log(original.adress.city)
console.log(copy2.adress.city)

const copy3 = structuredClone(original) //глубокое копирование
const copy4 = JSON.parse(JSON.stringify(original)) //тоже (не может преобразовать функции, только пары "key":"value")

console.log(JSON.stringify(original))

console.log('\n')

