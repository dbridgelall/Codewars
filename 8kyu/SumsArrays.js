// Link to Kata:
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum(numbers) {
    "use strict";
    let result = 0;
    if (numbers === []) {
        return 0
    }
    else {
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        } return result
    }
};

console.log(sum([1, 5.2, 4, 0, -1]))
console.log((sum([]), 0))
