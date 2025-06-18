
const strLen = (str, alphabet) =>{
 str = str.toLowerCase();
 const letterMaps = new Map();
 for(let i=0;i < str.length; i++){
    if (letterMaps.has(str[i])){
        letterMaps.set(str[i], letterMaps.get(str[i]) + 1);
    }else {
        letterMaps.set(str[i], 1);
    }
 }
if (letterMaps.has(alphabet)){
   return letterMaps.get(alphabet)
}else{
    return 'No match';
}
}

console.log(strLen('Shubhamm','e'));