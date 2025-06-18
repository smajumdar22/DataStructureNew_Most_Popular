function largestPrime(number){
 let prime = [];
 let divisor = 2;
  while (number >1 ){
      if(number % divisor == 0){
          number /= divisor;
          prime.push(divisor);
          console.log(prime)
      }else{
        divisor++;
      }
  }

 return largestNumber(prime);
}

function largestNumber(arr){
    let max =0;
    for(let i=0; i< arr.length; i++){
      if(arr[i] > max){
          max = arr[i];
      }
    }
    return max;

}

console.log(largestPrime(13195))
//console.log(largestNumber([5, 7, 13, 29]))