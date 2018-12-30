'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    let d = (b * b) - 4 * a * c;
    let x = [];

    if (d < 0) {
        console.log(`Корней нет. Дискриминант = ${d}`);
    } else if (d === 0) {
        x = -b / (2 * a);
        console.log(`Корень 1, x = ${x}`)
    } else {
        x[0] = (-b - Math.sqrt(d)) / (2 * a);
        x[1] = (-b + Math.sqrt(d)) / (2 * a);
        console.log(`Корня 2, x1 = ${x[0]} и х2 = ${x[1]}`);
    }
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    const nowYear = 2018;
    let age = nowYear - dateOfBirthday.getFullYear() ;
    let result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log(result);
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){

    let averageMark = 0;
        for (let i = 0; i < marks.length; i++) {
            averageMark = averageMark + marks[i];
        }
    return averageMark / 5;
}