'use strict';

function CalculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = GetResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function GetResult(a,b,c){
    let x = (b * b) - 4 * a * c;
    if (x < 0) {
        console.log(`Результат отрицательный, x = ${x}`)
    }
    return x;
}

function CalculateDrinkTask(){
    let name = window.name.value;
    let age = +window.age.value;
    let drink = AskDrink(name, age);
    window.drink.textContent = drink;
}

function AskDrink(name,age){

    let years = 2018 - age;
    let result = (years >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log(result);
    return result;
}

function CalculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = GetAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function GetAverageMark(marks){

    let averageMark = 0;
    if (marks[5] === undefined) {
        for (let i = 0; i <=4; i++) {
            averageMark = averageMark + marks[i];
        }
    }
    return averageMark / 5;
}