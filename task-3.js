'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const pass = prompt('Укажите пароль:');

if (pass === null) {
    message = 'Отменено пользователем!';
} else if (pass === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);