//ểm tra số nguyên tố
function checkIsPrime( number: number):boolean{
    let check = true;
    if(number<2){
        return check = false;
    }
    for(let i=2; i<= Math.sqrt(number);i++ ){
        if(number%i == 0){
            return check = false;
        }else{
            return check = true;
        }
    }return check;
} 
console.log(checkIsPrime(6));

function totalNumberPrime(number : number ){
    let count : number = 0;
    let total : number = 0;
    let i : number = 1;
    while(count < number){
    
        if(checkIsPrime(i)){
            count++;
            total +=i;
        }
        ++i;
    }
    console.log(total);
}
totalNumberPrime(3);