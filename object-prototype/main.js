function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    const now = Date.now();
    const dateOfBirth = new Date(birthday);
    const birthdi = dateOfBirth.getTime(); // нельзя уставновить имя переменной birthday
    const diff = now - birthdi;
    const average = ((3 * 31536000000) + 31622400000) / 4;
    const age = Math.round(diff / average);

    return age >= 18;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    const sound = animal.sound;

    if (typeof sound === 'undefined') {
        return null;
    } else {
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += parseInt(marks[i]);
    }

    const average = sum / marks.length;
    const roundedAverage = Math.round(average);

    return roundedAverage;
}