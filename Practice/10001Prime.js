function is_prime(num) {
    if (isNaN(num)) return false;
    var sq = Math.sqrt(num);
    for (var i=2; i<=sq; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

    function getBigPrime () {
    var holder = 0;
    var counter = 1;
        for (var k=3; counter<=10000; k+=2) { 
            if (is_prime(k)){ 
                holder = k; 
                counter += 1; // should be inside the if
            }
        }
        console.log(holder);
    }

    getBigPrime();