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
        p = parseFloat(percent / 100 / 12);
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
    let today = new Date();
    let oneDay = 1000606024;
    let result = Math.floor((d - today) / oneDay);
    let n = Math.floor(result / 30);

    let sum = a * (p + p / (Math.pow(1 + p, n) - 1));

    let debt = a - c;

    let totalAmount = sum + debt;

    // let yearFrom = d.getFullYear();
    // let yearTo = now.getFullYear();
    // let monthFrom = d.getMonth();
    // let monthTo = now.getMonth();
    //
    // let months = (yearFrom - yearTo) * 12 + (monthFrom - monthTo);
    //
    // let sum =  a - c;
    //
    // let bill = amount*(p+p/(((1+p)^months)-1));
    //
    // let totalAmount = sum + (bill * months);

   // console.log(months);


    return totalAmount.toFixed(2);
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