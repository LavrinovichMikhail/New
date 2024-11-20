// let array = new Array("aaa","bbb");
// let array1 = ["aaa"];

// const array3 = new Array(10);

// for (let el of array3) {
//     console.log(el);
// }

const tasks = ["Закончить проект", "Поесть", "Почитать книгу"];

// console.log(tasks.length);

// tasks[0] = "Начать новый проект";
// tasks.shift();

// console.log(tasks);

// tasks.push("Закончить проект");

// console.log(tasks);

// tasks.pop();

// console.log(tasks);

const newTasks = [];

newTasks.push("Закончить проект1");
newTasks.push("Закончить проект2");
newTasks.push("Закончить проект3");

// console.log(newTasks);

// newTasks.pop();

// console.log(newTasks);

// newTasks[4] = "f";

// console.log(newTasks);
// console.log(newTasks[4]);

// newTasks.unshift(newTasks)

// console.log(newTasks);

// newTasks.shift(newTasks)

// console.log(newTasks);

const currentTasks = tasks.concat(newTasks);

// const newVar = newTasks.slice(newTasks.length - 1);

// console.log(newVar);

// console.log(currentTasks.includes("Почитать книгу",0))
// if (currentTasks.includes("Почитать книгу",0))
// console.log(currentTasks.indexOf("Почитать книгу",0))

// currentTasks.splice(currentTasks.indexOf("Почитать книгу",0),1,"Сделать математику")

// console.log(currentTasks.includes("Почитать книгу",0))

// currentTasks.splice(2,5,"Почитать книгу");
currentTasks.splice(-1,1,"Почитать книгу2");

// console.log(currentTasks);

// currentTasks.reverse();

// console.log(currentTasks.sort());


const nums = [1,5,6,2,3];
// nums.sort((a,b) => a - b);
// console.log(nums);
// let array = "12 12 12 12 12";
// array = array.split(" ");
// console.log(array);
currentTasks.forEach(element => {
    console.log(`Задача: ${element}`);
});

// console.log(currentTasks.map(element => {
//     `Задача: ${element}`;
// }));

console.log(currentTasks.filter(element => 
    element.length < 10
))

console.log(currentTasks.reduce((accumulator,currentValue) =>
    accumulator + currentValue.length,0
))

//changes
//changes
//changes
//changes



//changes
//changes
//changes


//changes
//changes
//changes

