// Задание 2.

/*
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым,
и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
*/

var count = +prompt('Введите простое число от 1 до 1000:', '');

function isNatural(count) {
    if (count > 1000 || count < 1) {
        return console.log('Данные не верны. Введите число от 1 до 1000');
    }
    if (count == 1) {
        return console.log('Число 1 не является простым числом');
    }
    for (var i = 2; i < count; i++) {
        if (count % i == 0) {
            return console.log('Вы ввели не простое число!');
            break;
        } 
    }
    return console.log(`Все верно, это простое число - ${count}`);
}

isNatural(count);

//====================================================================================================================