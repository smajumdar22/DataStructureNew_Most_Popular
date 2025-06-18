function largestPalindromeProduct(n){
    if(n.toString().length > 3 || n.toString().length < 3){
        return "Only 3 digit number is allowed"
    }
    let maxPalindrome = 1;
    for(let i=n; i>0; i--){
        for (let j= n; j> 0; j--){
            let product = i * j;
            if( product.toString() === product.toString().split("").reverse().join("") && product > maxPalindrome){
                maxPalindrome = product;
            }
        }
    }
    return maxPalindrome;


}

console.log(largestPalindromeProduct(999))
