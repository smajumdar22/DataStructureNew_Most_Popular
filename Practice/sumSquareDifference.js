function sumSquareDifference(){
     let sum =0;
     let squareSum =0;
    for(let i =1; i<= 10; i++){
      sum += i;
      squareSum += (i * i)
    }
    sum = Math.pow(sum, 2);
    // console.log(sum)
    // console.log(squareSum)
    let difference = sum - squareSum;

    return difference;
}

console.log(sumSquareDifference())