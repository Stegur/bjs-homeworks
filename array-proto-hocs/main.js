function compareArrays(arr1, arr2) {

    return arr1.length !== arr2.length ? false : arr1.every((el, index) => el === arr2[index]);
}

// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([9, 2], [9]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true

function memoize(fn, limit) {

    let results = [];
    console.log('Функция вызвана из памяти');

    return function () {
        for (let i = 0; i < results.length; i++) {

            let args = results[i].args;

            if (compareArrays(args, arguments)) {
                return args;
            }
        }

        results.slice(0, limit);


        results.unshift({
            args: [...arguments],
            result: fn(...arguments)
        });

        return fn(...arguments);

    };

}


const sum = (a, b) => {
    console.log('Функция вызвана не из памяти');
    return a + b
}; // ЗДЕСЬ, наверное не хватаело console.log(), так как результата небыло видно...
const mSum = memoize(sum, 2); // 2 результата хранятся в памяти

// Вызов этих функций даёт один и тот же результат
console.log(sum(3, 4)); // 7
/*
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
console.log(mSum(3, 4)); // 7
console.log(mSum(3, 4)); // 7
console.log(mSum(7, 4)); // 11