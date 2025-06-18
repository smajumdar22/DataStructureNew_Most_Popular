function reverseWordsInASentence(str){
    str = str.split(" ");
    console.log(str);
    let newStrArr=[];
    let newStr="";
  
    for(let i =0;i< str.length;i++){
       let reversedStr = reverse(str[i])
       newStrArr[i] = reversedStr;
    }
    return newStrArr.join(' ');
  };
  
  function reverse(s){
    let newStr ="";
    for(let i= s.length-1;i>=0;i--){
      newStr += s[i];
    }
    return newStr;
  }