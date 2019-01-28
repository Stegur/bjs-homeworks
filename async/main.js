function setDailyRhythm(wakeUpTime, bedTime) {

    const goodMorning = () => alert('Доброе утро!');
    const goSleep = () => alert('Пора спать!');

    const wakeUp = setAlarm(wakeUpTime, goodMorning);
    const goBed = setAlarm(bedTime, goSleep);

    const now = new Date();
    const hoursNow = now.getHours();
    const minutesNow = now.getMinutes();

    const time = `${hoursNow}:${minutesNow}`;

    setInterval(wakeUp(time), 1000);
    setInterval(goBed(time), 1000);
}


function setAlarm(time, callback) {
    return function () {
        const now = new Date();
        const hoursNow = now.getHours();
        const minutesNow = now.getMinutes();

        const [hoursAlarm, minutesAlarm] = time.split(':'); // правильно ли использовал дкструктцризацию?

        if (hoursAlarm === hoursNow && minutesAlarm === minutesNow) {
            callback();
        }
    }
}


const goodMorning = () => alert('Доброе утро!'),
    checkTime = setAlarm('07:00', goodMorning);

/*
	передаём в checkTime информацию о
	текущем времени системы. Так как 07:00 и 07:30,
	goodMorning не вызывается
*/
checkTime('07:30');

checkTime('07:00'); // Доброе утро