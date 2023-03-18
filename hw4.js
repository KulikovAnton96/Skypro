//Задание 1
do {
    console.log('Привет')
    console.log('Привет')
} while (false);

//Задание 2
let i = 0
while (i < 6) {
    console.log(i);
    i++;
}

//Задание 3
let z = 7
do {
    console.log(z);
    z++;
} while (z <= 22);

//Задание 4
const obj = {
    'Коля': ' - зарплата 200 долларов',
    'Вася': ' - зарплата 300 долларов.',
    'Петя': ' - зарплата 400 долларов.',
};
for (let item in obj) {
    console.log(obj);
    break;
}

//Задание 5
let num = 0
for (let n = 1000; n > 50; n / 2) {
    num = n % 2;
    console.log(num);
    break;
}

//Задание 6
for (let Friday = 3; Friday < 31; Friday++) {
    Friday += 7;
    alert(`Сегодня пятница, ${Friday} -е число. Необходимо подготовить отчет.`);

}
