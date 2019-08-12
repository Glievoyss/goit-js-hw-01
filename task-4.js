'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let selectionResult;
let totalPrice;

selectionResult = prompt('Укажите количество дроидов которые хотите купить:');

if (selectionResult === null) {
    console.log('Отменено пользователем!');
} else if (selectionResult === '0') {
    console.log('Когда надумаете купить дронов, добро пожаловать!');
} else {
    if (Number(selectionResult) > 0 ) {
        selectionResult = Number(selectionResult);
        totalPrice = selectionResult * pricePerDroid;
        if (totalPrice > credits) {
            console.log('Недостаточно средств на счету!');
        } else {
            credits = credits - totalPrice;
            console.log(`Вы купили ${selectionResult} дроидов, на счету осталось ${credits} кредитов.`);
        }
    } else {
        console.log('Некоректный ввод (в следущий раз не набирайте буквы)');
    }
}