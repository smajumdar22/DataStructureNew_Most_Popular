//Count letters

function countLetters(s){
    let newMap = new Map();
  
    for(let i=0;i<s.length;i++){
       if(newMap.has(s[i])){
         newMap.set(s[i],newMap.get(s[i])+1)
       }
       else{
         newMap.set(s[i],1)
       }
    }
    return newMap;
  }