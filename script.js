function game1 () {
    let monthNumber = prompt('Введите номер месяца');

    while (monthNumber <= 12) {
        if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
            alert('Зима');
        } else if (monthNumber >= 3 && monthNumber <= 5) {
            alert('Весна');
        } else if (monthNumber >= 6 && monthNumber <= 8) {
            alert('Лето');
        } else if (monthNumber >= 9 && monthNumber <= 11) {
            alert('Осень');
        } else {
            alert('Попробуйте ещё раз');
            }
            monthNumber++;
            break;
    }    
}

function game2 () {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    let shuffledFruits = fruits.sort(() => Math.random() - 0.5);

    for (let i = 0; i < shuffledFruits.length; i++) {
        alert(shuffledFruits[i]);
    }

    let firstFruit = prompt('Чему равнялся первый элемент массива?');
    let lastFruit = prompt('Чему равнялся последний элемент массива?');

    if (firstFruit === fruits[0] && lastFruit === fruits[fruits.length - 1]) {
        alert('Поздравляем, вы угадали оба элемента массива!');
    } else if (firstFruit === fruits[0] || lastFruit === fruits[fruits.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('К сожалению, вы неверно ответили на оба вопроса.');
    }
}