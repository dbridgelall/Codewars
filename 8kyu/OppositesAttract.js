// Link to Kata:
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
    // moment of truth
    if ((flower1 % 2 == 0 && flower2 % 2 !== 0) || (flower1 % 2 == 1 && flower2 % 2 == 0)){
        return true
    } else return false
}

console.log(lovefunc(1, 4)) // true
console.log(lovefunc(2, 2)) // false
console.log(lovefunc(0, 1)) // true
console.log(lovefunc(0, 0)) // false