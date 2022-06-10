function palindrome(testStr){
tempArr=testStr.split("");

let j=tempArr.length-1;


for (let i=0 ; i<j ; i++){

    console.log(tempArr[i],tempArr[j]);
    
    if (tempArr[i]==tempArr[j]){
           j--;
    } else if(tempArr[i]!=tempArr[j]){
        //console.log("false");
        return false;
    }
}
//console.log("True");
return true;

}

console.log(palindrome("AKGBBGKA"));