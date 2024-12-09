// Task 1

const car = {}

Object.defineProperty(car, "price", {
    value: 10000,
    writable: true,
    enumerable: false,
    configurable: true
})

//Combine Objects

function combine(...objs) {
    const newObj = {...objs.shift()}
    for(let obj of objs) for(let el in obj) newObj[el] = newObj[el] ? newObj[el] + obj[el] : obj[el]
    return newObj
}

//Did someone say cake?

function cake(limit, limitValue){
    var recipe = {
      'caster sugar': 160,
      'butter': 170,
      'eggs': 3,
      'self-raising flour': 115,
      'cocoa powder': 55
    };
    var k = (limitValue / recipe[limit] * recipe['eggs']) / recipe['eggs'];
    for (let el in recipe) recipe[el] = el == 'eggs' ? Math.round(recipe[el]*k*10) / 10 : Math.round(recipe[el]*k*10) / 10 + 'g';
    return recipe;
}