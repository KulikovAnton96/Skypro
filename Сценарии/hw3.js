//Задание 1
let password = String(prompt('Введите пароль'));

if (password === 'пароль') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задание 2
let c = Number(prompt('Введите число'));

if (c >= 0 && c <= 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 3
let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 4
let a = +2;
let b = +3;
alert(a + b);

let aa = Number(2);
let bb = Number(3);
alert(a + b);

//Задание 5
let monthNumber = prompt("Укажите номер месяца");
switch (monthNumber) {
    case '1':
        alert('Январь, зима.');

        break;
    case '2':
        alert('Февраль, зима.');

        break;
    case '3':
        alert('Март, весна.');

        break;
    case '4':
        alert('Апрель, весна.');

        break;
    case '5':
        alert('Май, весна.');

        break;
    case '6':
        alert('Июнь, злето');

        break;

    case '7':
        alert('Июль, лето.');

        break;

    case '8':
        alert('Август, лето.');

        break;

    case '9':
        alert('Сентябрь, осень.');

        break;

    case '10':
        alert('Октябрь, осень.');

        break;
    case '11':
        alert('Ноябрь, осень.');

        break;
    case '12':
        alert('Декабрь, зима.');

        break;

    default: alert('Извини,такого месяца нет.')
        break;
}

//Задание 7
let number = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(+number)) {
    alert('Ошибка');
} else if (+number % 2) {
    alert('Число нечетное');
} else {
    alert('Число четное');
}

//Задание 8
let clientOS = Number(prompt('Укажите тип операционной системы. Нажмите "0" - если у вас iOS или "1" - если Android.'));

if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}

//Задание 9
let clientOS2 = Number(prompt('Выберите тип операционной системы. Нажмите "0" - если у вас iOS или "1" - если Android.'));
let clientDeviceYear = Number(prompt('Укажите год выпуска телефона'));

if (clientDeviceYear < 2015 && clientOS2 === 0) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientDeviceYear < 2015 && clientOS2 === 1) {
    alert('Установите облегченную версию приложения для Android по ссылке')
} else if (clientDeviceYear >= 2015 && clientOS2 === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
} 
