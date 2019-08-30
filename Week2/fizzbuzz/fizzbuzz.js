function fizzBuzz(list1 = [], list2 = []) {
    totalLength = list1.length + list2.length;

    if((totalLength%3==0)&&(totalLength%5==0)){
        return "Fizzbuzz";
    }
    else if(totalLength%3==0){
        return "Fizz";
    }
    else if(totalLength%5==0){
        return "Buzz";
    }
    else{
        return totalLength;
    }
} 
module.exports = fizzBuzz;
