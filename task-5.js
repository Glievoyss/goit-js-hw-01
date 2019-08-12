'use strict';

const China = 100,
    Chile = 250,
    Australia = 170,
    India = 80,
    Jamaica = 120;

let selectedСountry;

let country = prompt('В какую страну оформить доставку товара?:');



if (country === null) {
    console.log('В следующий раз выберете страну доставки.');
} else {
    country = country[0].toUpperCase() + country.slice(1).toLowerCase();
    switch (country.toLowerCase()) {
        case 'Китай'.toLowerCase():
            console.log(`Доставка в ${country} будет стоить ${China} кредитов.`);
            break;
        case 'Чили'.toLowerCase():
            console.log(`Доставка в ${country} будет стоить ${China} кредитов.`);
            break;
        case 'Австралия'.toLowerCase():
            console.log(`Доставка в ${country} будет стоить ${Australia} кредитов.`);
            break;
        case 'Индия'.toLowerCase():
            console.log(`Доставка в ${country} будет стоить ${India} кредитов.`);
            break;
        case 'Ямайка'.toLowerCase():
            console.log(`Доставка в ${country} будет стоить ${Jamaica} кредитов.`);
            break;

        default:
            console.log('В вашей стране доставка не доступна');
            break;
    }
}