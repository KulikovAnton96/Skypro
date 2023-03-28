//Задание 1

function numbers (a,b) {
  
    if (a<=b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
numbers(4,6);
numbers(8,4);
numbers(6,6);

//Задание 2

function num (z) {

    if (z % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}
num(5);
num(4);

//Задание 3

function calc (d) {
    return d * d;
}

let result = calc(4);

console.log(result);

//Задание 4

let age = prompt("Сколько Вам лет?");

    if (age < 0) {
        printMessage = function () {
        console.log('Вы ввели неправильное значение');
        }
    } else if (age > 0 && age <= 12) {
        printMessage = function () {
        console.log('Привет, друг!');
        }
    } else {
        printMessage = function () {
        console.log('Добро пожаловать!');
    }
    }

printMessage();

//Задание 5

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

function correctNum (a,b) {
    testNum(a) && testNum(b) ? alert(a*b):
    alert('Одно или оба значения не являются числом');
}

function testNum(num) {
    if(!isNaN(num) && num !=='' && num !==null) return true;
    return false;
}

correctNum(num1 , num2);

//Задание 6

let n = prompt('Введите число');
let cubed = n ** 3;

function cubedN (n, cubed) {
    if (!isNaN(n)) {
        return(`${n} в кубе равняется ${cubed}`);
    } else {
        return('Переданный параметр не является числом');
    }
}

console.log(cubedN(n, cubed));

//Задание 7

function getRectangleArea() {
    return (this.radius ** 2) * 3,14;
  }

function getRectanglePerimeter() {
    return (this.radius * 2) * 3,14;
  }
  
const circle1 = {
    radius: 4,
  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  }
  
const circle2 = {
    radius: 16,
      
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  }

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());