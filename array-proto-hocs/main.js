function compareArrays(arr1, arr2) {
    let status;
    if (arr1.length > arr2.length || arr1.length < arr2.length) {
        status = false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            status = arr1[i] === arr2[i];
        }
    }
    return status;

}

// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([9, 2], [9]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true

function memoize(fn, limit) {

    let results = [{
        args: [],
        result: 0,
    }];

    console.log('Рзультат берётся из памяти');

    return function (...fn) {
        console.log('Функция вызвана не из памяти');
        for (let i = 0; i < results.length; i++) {

            let args = results[i].args;

            if (compareArrays(args, arguments)) {
                return args;
            }
        }

        if (results.length > limit) {
            results.length = limit;
        }

        results.push({
            args: arguments,
            result: fn(arguments)
        });

        console.log(results);

        return fn(arguments);

    };

}


const sum = (a, b) => a + b;

const mSum = memoize(sum, 2); // 2 результата хранятся в памяти

// Вызов этих функций даёт один и тот же результат
sum(3, 4); // 7
/*
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
mSum(3, 4); // 7