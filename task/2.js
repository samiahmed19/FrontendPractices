// 2 - Find the smallest number among three intergers using if-else

var a=prompt("Enter 1st number: ");
var b=prompt("Enter second number: ");
var c=prompt("Enter thrid number: ");
console.log("The numbers are: ")
console.log(a+" "+b+" "+c);
if(a<b && a<c){
    console.log(a+" is smaller");
}
else if(b<a && b<c){
    console.log(b+" is smaller");
}
else{
    console.log(c+" is smaller");
}