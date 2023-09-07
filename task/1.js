// 1 - Find the greatest number among three intergers using if-else
var a=prompt("Enter 1st number: ");
var b=prompt("Enter second number: ");
var c=prompt("Enter thrid number: ");
console.log("The numbers are: ")
console.log(a+" "+b+" "+c);
if(a>b && a>c){
    console.log(a+" is greatest");
}
else if(b>a && b>c){
    console.log(b+" is greatest");
}
else{
    console.log(c+" is greatest");
}
