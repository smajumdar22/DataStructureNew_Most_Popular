function repeatedString(s){
    let myMap = new Map();
    s=s.split("");
     for(let i=0;i<s.length;i++){
        if(myMap.has(s[i])){
          myMap.set(s[i],myMap.get(s[i])+1)
        }else {
          myMap.set(s[i],1);
        }
     }
     return myMap;
  
  };