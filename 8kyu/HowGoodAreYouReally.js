// Link to Kata
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
        classPoints.push(yourPoints)
        let accum = 0;
        for(let i=0; i < classPoints.length; i++){
            accum += classPoints[i]
        }
        let avg = accum/(classPoints.length)
    return yourPoints > avg ? true : false
}

 console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // true
 console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) // false