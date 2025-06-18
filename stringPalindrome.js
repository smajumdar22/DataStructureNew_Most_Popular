function isPalindrome(s){
    let j= s.length-1;
  
    for(let i=0;i<s.length/2;i++){
      //console.log("i is "+i +"and j is "+ j);
      if(s.charAt(i) != s.charAt(j-i)){
      console.log("s[i] is "+s[i] +" and s[j] is "+ s[j]);
        return false
      }
    }
  
    return true;
  }