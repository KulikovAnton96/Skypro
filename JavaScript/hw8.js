//Задание 1
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}
  
function multiplyArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
}
  
function calculate(arr, callback) {
    return callback(arr);
}

//Задание 2
const users = [
    {name: 'Jon', age: 22},
    {name: 'Richard', age: 18},
    {name: 'Anton', age: 32},
    {name: 'Lida', age: 23},
    {name: 'Bob', age: 44}
];
  
users.sort(function(a, b) {
    return a.age - b.age;
});
  
console.log(users);

//Задание 3
//Функция переворачивает переданный ей массив
function reversArr(arr) {
    return arr.reverse();
}
  
// Функция преобразовывает все элементы массива в числа и удаляет NaN
function toNumberArr(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      let num = Number(arr[i]);
      if (!isNaN(num)) {
        result.push(num);
      }
    }
    return result;
}
  
// Функция each принимает массив и callback-функцию и выполняет ее на этом массиве
function each(arr, callback) {
    console.log(callback(arr));
}

//Задание 4
function printCurrentTime() {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}

const intervalId = setInterval(printCurrentTime, 3000);

setTimeout(function() {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);

//Задание 5
function calling() {
    console.log('Звоню!');
}
  
function beeps() {
    const beepsTimer = setInterval(() => {
      console.log('Идут гудки...');
    }, 1000);
    
    setTimeout(() => {
      clearInterval(beepsTimer);
      talk();
    }, 4000);
}
  
function talk() {
    console.log('Разговор');
}
  
calling();
beeps();
