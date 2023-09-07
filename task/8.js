// 8 - Print the prime numbers for the given range

function isPrime(n){
    if (n <= 1)return false;
    if (n == 2 || n == 3)return true;
    if (n % 2 == 0 || n % 3 == 0)return false;
    for (var i = 5; i <= Math.sqrt(n); i+=6){
        if (n % i == 0 || n % (i + 2) == 0)return false;
    }
    return true;
}

// var n=promt("Enter a range: ");
for(var i=0;i<100;i++){
    if(isPrime(i))console.log(i);
}