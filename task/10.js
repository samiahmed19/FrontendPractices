// 10 - find the factorial of the given number
var n=10;
var fact=1;
if(n==0) console.log(1);
for(var i=1;i<=n;i++){
    fact=fact*i;
}
console.log(fact);