function swapValues(a,b){
    a = a - b; //5
    b = a + b; //15
    a = b -a; //10
 
    return {"a":a,
         "b":b
    }
 };