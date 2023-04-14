
// Задание 1
let A = 20;
alert(`Задание 1. ${A}`);

//Задание 2
let agePhone = 2017;
alert(`Задание 2. Год выпуска первого iPhone -  ${agePhone}`);

//Задание 3
let nameJS = 'Брендан Эйх';
alert(`Задание 3. Создатель JavaScript - ${nameJS}`);

//Задание 4
let x = 10;
let y = 2;
alert(`Задание 4. 10-2= ${x - y}`);
alert(`10+2= ${x + y}`);
alert(`10*2= ${x * y}`);
alert(`10*2= ${x / y}`);

//Задание 5
let z = 2;
alert(`Задание 5. 2 в 5 степени = ${z ** 5}`);

//Задание 6
let a = 9;
let b = 2;
alert(`Задание 7. Остаток от деления 9/2= ${a % b}`);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(`Задание 7. Число ${num}`);

//Задание 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);

//Задание 9
const user = {
    name: 'Иван',
    isAdmin: true
}

user.cityOfResidence = true;

user.age = '30';

delete user.cityOfResidence;

let info = prompt('Какую информацию хотите узнать о пользователе?')

console.log / user['age'];

alert(user.age);

//Задание 10
let namE = prompt('Как вас зовут?');
alert(`Привет, ${namE} !`);
