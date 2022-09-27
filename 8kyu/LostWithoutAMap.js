// Link - https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// function maps(x) {
//     let result = [];
//     for (let i = 0; i < x.length; i++) {
//         result.push(x[i] * 2);
//     }
//     return result
// }

function maps(x) {
    return x.map(n => n * 2);
}

maps([1, 2, 3]) // [2, 4, 6]