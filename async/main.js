function setDailyRhythm(wakeUpTime, bedTime) {

    const goodMorning = () => alert('Доброе утро!');
    const goSleep = () => alert('Пора спать!');

    const wakeUp = setAlarm(wakeUpTime, goodMorning);
    const goBed = setAlarm(bedTime, goSleep);

    setInterval(wakeUp, 60000);
    setInterval(goBed, 60000);
}


function setAlarm(time, callback) {
    return function () {
        const now = new Date();
        const hoursNow = now.getHours().toString();
        const minutesNow = now.getMinutes().toString();

        const [hoursAlarm, minutesAlarm] = time.split(':');

        if (hoursAlarm === hoursNow && minutesAlarm === minutesNow) {
            callback();
        }
    }
}


// const goodMorning = () => alert('Доброе утро!'),
//     checkTime = setAlarm('07:00', goodMorning);
//
// /*
// 	передаём в checkTime информацию о
// 	текущем времени системы. Так как 07:00 и 07:30,
// 	goodMorning не вызывается
// */
// checkTime('07:30');
//
// checkTime('07:00'); // Доброе утро


setDailyRhythm('17:55', '16:47');