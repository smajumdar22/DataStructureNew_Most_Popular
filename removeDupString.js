//Remove duplicates from a string

function removeDuplicates(s){
    let newStr ="";
    s =  s.split("");
    console.log(s)
    for(values in s){
      if(!newStr.includes(s[values])){
      newStr += s[values];
      }
    }
    return newStr;
  }

  function removeDuplicatesSet(s){
    let newStr ="";
    let newSet = new Set();
    s= s.split("");
    for (values in s){
      newSet.add(s[values]);
    }
    
    newSet.forEach((values)=>{
      newStr += values;
      console.log(values)
    })
   return newStr;
  }