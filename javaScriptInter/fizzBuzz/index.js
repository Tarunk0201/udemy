
function fizzBuzz(a, b, start, end){
    let output = [];
    for(let i = start; i <= end; i++){
        if((i % a === 0) && (i % b === 0 )){
            output.push("FizzBuzz");
        }else if(i % a === 0 ){
            output.push("Fizz");
        }else if(i % b === 0 ){
            output.push("Buzz");
        }else{
            output.push(i);
        }
    }
    console.log(output);
}

fizzBuzz(5, 3, 1, 100);