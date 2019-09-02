vowels = [];
repeats = 0;

function searchVowel(myString){
    if(myString.indexOf("a")>=0){
        vowels = vowels + ["a"];
    }
    if(myString.indexOf("e")>=0){
        vowels = vowels + ["e"];
    }
    if(myString.indexOf("i")>=0){
        vowels = vowels + ["i"];
    }
    if(myString.indexOf("o")>=0){
        vowels = vowels + ["o"];
    }
    if(myString.indexOf("u")>=0){
        vowels = vowels + ["u"];
    }

    for(counter = 0; counter <= myString.length; counter++){
        if(myString[counter]==myString[counter++]){
            repeats = repeats++;    
        }
    }
}
searchVowel("you go girl");

function duplicates(str){
    try{ return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
    catch(e){ return 0; } 
}

console.log("[" + "'" + vowels + "'" + "," + duplicates("you go girl") + "]");
