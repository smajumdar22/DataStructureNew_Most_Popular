/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

console.log(6%3)
function multiples(n1, n2, range) {
    let sum = 0;
    for (let i = 0; i < range; i++) {
        //console.log(i)
        let divisibleByn1 = i % n1;
        let divisibleByn2 = i % n2;
        if (divisibleByn1 === 0 || divisibleByn2 === 0) {
            console.log(i)
            sum += i
        }
    }
    return sum;
}

console.log(multiples(3, 5, 10))
