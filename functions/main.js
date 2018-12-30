// Задача 1

function getSolutions(a, b, c) {
    const D = (b * b) - (4 * a * c);

    if (D < 0) {
        return {D: D}
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return {
            roots: [x1],
            D: D
        }
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            roots: [x1, x2],
            D: D
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.roots === undefined) {
        console.log(`Уравнение не имеет вещественных корней`)
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
    } else if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
}

// Проврка

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Задача 2

function getPersonData(secretData) {
    let firstName, lastName;

    if (secretData.aaa === 0) {
        firstName = 'Родриго';
    } else if (secretData.aaa === 1) {
        firstName = 'Эмильо';
    }

    if (secretData.bbb === 0) {
        lastName = 'Родриго';
    } else if (secretData.bbb === 1) {
        lastName = 'Эмильо';
    }

    return {
        firstName,
        lastName
    }
}

// Проврка
console.log('\n');

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));

// Задача 3

function getAverageScore(data) {
    let obj = {};

    let average = 0;
    let counter = 0;

    for (let name in data) {
        let count = 0;
        for (let i = 0; i < data[name].length; i++) {
            count = (count + data[name][i]);
            obj[name] = count / data[name].length;
        }

        average += obj[name];
        counter++;
    }

    obj.average = average / counter;

    return obj;
}

// Проврка
console.log('\n');

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
}));