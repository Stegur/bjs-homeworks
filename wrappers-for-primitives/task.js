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

    let p, c, a;

    if (parseFloat(percent)) {
        p = parseFloat(percent) / 100;
    } else {
        return `Параметр 'Процентная ставка' содержит неправильное значение '${percent}'`;
    }
    if (parseInt(contribution) || contribution == 0) {
        c = (parseInt(contribution)) ? parseInt(contribution) : 0;
    } else {
        return `Параметр 'Начальный взнос' содержит неправильное значение '${contribution}'`;
    }
    if (parseInt(amount)) {
        a = parseInt(amount);
    } else {
        return `Параметр 'Общая стоимость' содержит неправильное значение '${amount}'`;
    }

    let d = new Date(date);
    let now = new Date();
    let yearFrom = d.getFullYear();
    let yearTo = now.getFullYear();
    let monthFrom = d.getMonth();
    let monthTo = now.getMonth();

    let months = (yearFrom - yearTo) * 12 + (monthFrom - monthTo);

    let sum =  a - contribution;

    let bill = amount*(p+p/(((1+p)^months)-1));

    let totalAmount = sum + (bill * months);

   // console.log(months);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {

    let login;

    if (name === 'null' || name === "" || name === 'undefined') {
        login = 'Аноним';
    } else {
        login = name;
    }

    let greeting = `Привет, мир! Меня зовут ${login}`;
    return greeting;
}