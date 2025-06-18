//The Fibonacci
//0 1 1 2 3 5
function fibonacci(n){
    let num1=0;
    let num2=1;
    for(let i=0;i<=n;i++){
      console.log(num1 +"");
      let sum = num1+num2;
      num1 = num2;
      num2 = sum;
    }
  }