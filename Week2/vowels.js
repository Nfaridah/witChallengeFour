resultList = [];
repeats = 0;

function searchVowel(myString){
    if(myString.indexOf("a")>=0){
        resultList = resultList + ["a"];
    }
    if(myString.indexOf("e")>=0){
        resultList = resultList + ["e"];
    }
    if(myString.indexOf("i")>=0){
        resultList = resultList + ["i"];
    }
    if(myString.indexOf("o")>=0){
        resultList = resultList + ["o"];
    }
    if(myString.indexOf("u")>=0){
        resultList = resultList + ["u"];
    }

    for(counter = 0; counter <= myString.length; counter++){
        if(myString[counter]==myString[counter++]){
            repeats = repeats++;
            
        }
    }
}
searchVowel("you go girl");
console.log(resultList);


    
