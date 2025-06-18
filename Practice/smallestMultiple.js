
function smallestMultiple(){
    let i = 1;
    let found = false;
    while(!found){
         i += 1;
        // console.log(i)
         let isDivisible = true;
         for(let j=1; j<=20; j++){
             //console.log("Inside for loop ,",i)
             if (i % j != 0){
                 isDivisible = false;
                 break;
             }
         }
         if(isDivisible){
             found = true;
         }

    }
    return i;

}

console.log(smallestMultiple());