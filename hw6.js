//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

//Задание 2
const numbS = [1, 5, 4, 10, 0, 3];
const index = numbS.indexOf(4);
console.log(index);

//Задание 3
let num = [1, 3, 5, 10, 20];
num = num.join(' ');

console.log(num);

//Задание 4
let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

//Задание 5
let n = [1, 1, 1];
n.push(2,2,2);
console.log(n);

//Задание 6
let arR = [9, 8, 7, 'a', 6, 5];
arR = arR.sort();
console.log(arR.pop());
console.log(arR);

//Задание 7
const Numbs = [9, 8, 7, 6, 5];
const userInput = parseInt (prompt('Введите число'));

if (Numbs.includes(userInput)) {
    console.log(`Число ${userInput} содержится в массиве`);
} else {
    console.log(`Число ${userInput} не содержится в массиве`);
}

//Задание 8
const str = 'abcdef';
const reverseStr = str.split('').reverse().join('');
console.log(reverseStr);

//Задание 9
const aRr = [
    [1, 2, 3,],
    [4, 5, 6],
];
const flatARr = aRr.flat();
console.log(flatARr);

//Задание 10
const freeNumbs = [5,10,2,7,3,9,1,6,8,4];

for (let i=0; i < freeNumbs.length -1; i++) {
    const sum = freeNumbs[i] + freeNumbs[i + 1];
    console.log(sum);
}

//Задание 11
function squareArray(arr) {
    const squaredArr = arr.map(num => num ** 2);
    return squaredArr;
}

//Задание 12
function wordsLengths(arr) {
    const lengthArr = arr.map(word => word.length);
    return lengthArr;
}

//Задание 13
function filterNegatives(arr) {
    const negativeArr = arr.filter(num => num < 0);
    return negativeArr;
}

