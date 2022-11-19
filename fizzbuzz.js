
let result;

function fizzbuzz(param) {
    
    for (let i = 1; i <= param; i++) {

        
        if(i%3==0 && i%5==0){
            result='fizzbuzz';
        }else if(i%3==0){
            result='fizz';
        }else if(i%5==0){
            result='buzz';
        }else{
            result= i;
        }

        console.log(result);
        
    }
    return(result);
}

const nilai = fizzbuzz(100);
