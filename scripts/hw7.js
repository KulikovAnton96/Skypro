//Задание 1
const str = 'js';
const upperCaseStr = str.toUpperCase();

console.log(upperCaseStr);

//Задание 2
function filterArray(arr, str) {
    const filteredArr = arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
    return filteredArr;
}

//Задание 3
const num = 32.58884;
const floorNum = Math.floor(num);
const ceilNum = Math.ceil(num);
const roundNum = Math.round(num);

console.log('Меньшее целое:', floorNum);
console.log('Большее целое:', ceilNum);
console.log('Ближайшее целое:', roundNum);

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log('Наименьшее число: ' + minNumber);
console.log('Наибольшее число: ' + maxNumber);

//Задание 5
function randomNum() {
    const min = 1;
    const max = 10;
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num);
}
  
randomNum();

//Задание 6
function randomArray(num) {
    const arrLength = num / 2;
    const arr = [];
    for (let i = 0; i < arrLength; i++) {
      arr.push(Math.floor(Math.random() * num));
    }
    return arr;
}
  
const result = randomArray(10);
console.log(result);

//Задание 7
function randomInRange(num1, num2) {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}
  
const resulT = randomInRange(1, 10);
console.log(resulT);

//Задание 8
console.log(new Date().toLocaleString());

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);
const now = new Date();

//Задание 10
function formatDate(date) {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    
    if (hours.length < 2) {
      hours = `0${hours}`;
    }
    
    if (minutes.length < 2) {
      minutes = `0${minutes}`;
    }
    
    if (seconds.length < 2) {
      seconds = `0${seconds}`;
    }
    
    return `Дата: ${dayOfMonth} ${monthName} ${year} - это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(now));

