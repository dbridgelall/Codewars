// Link - https://www.codewars.com/kata/575fa9afee048b293e000287

function howMuchWater(water, load, clothes) {
    let totalWater = Math.round(water * Math.pow(1.1, (clothes - load)) * 100) / 100
    if (clothes > 2 * load) {
        return 'Too much clothes'
    } else if (clothes < load) {
        return 'Not enough clothes'
    } else return totalWater
}

// function howMuchWater(water, load, clothes) {
//     if (clothes > 2 * load) return 'Too much clothes'
//     if (clothes < load) return 'Not enough clothes'
//    return +((water * 1.1 ** (clothes - load)).toFixed(2))
//    }

// 
// var answer = howMuchWater(10, 10, 21)
// console.log(answer)

console.log(howMuchWater(10, 10, 21)) // 'Too much clothes',''
howMuchWater(10, 10, 2) // 'Not enough clothes',''
howMuchWater(10, 11, 20) // 23.58,''


