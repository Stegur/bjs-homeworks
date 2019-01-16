'use strickt';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let p, c, a, d;

    if (parseFloat(percent)) {
        p = parseFloat(percent);
    } else {
        return `Параметр 'Процентная ставка' содержит неправильное значение '${percent}'`;
    }
    if (parseFloat(contribution)) {
        c = parseFloat(contribution);
    } else {
        return `Параметр 'Начальный взнос' содержит неправильное значение '${contribution}'`;
    }
    if (parseFloat(amount)) {
        a = parseFloat(amount);
    } else {
        return `Параметр 'Общая стоимость' содержит неправильное значение '${amount}'`;
    }
    if (parseFloat(date)) {
        d = parseFloat(date);
    } else {
        return `Параметр 'Срок ипотеки' содержит неправильное значение '${date}'`;
    }


   console.log( p);
   console.log( c);
   console.log( a);
   console.log( d);
    //return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}