function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }

  function revStr(str){
    str = [...str];
    let newStr ='';
    console.log(str)
    for(let i= str.length -1; i >= 0;i--){
    newStr+=str[i];
    }
    return newStr;
}

revStr('abcd')

function stringReverse(s){
  if(s.length == 0 || s.length == 1){
    return s
  }
  let newStr="";
  for(let i=s.length -1;i>=0;i--){
     newStr += s[i];
     console.log(newStr);
  }

  return newStr;
}

  
  const reverse3 = str => [...str].reverse().join('');