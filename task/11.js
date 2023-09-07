// 11 - Write a calculator program 
// using swich case for two operands
// functionalities - 
// Addition
// Sabtraction
// multiplication
// division
// remider
// factorial
// percentage
// average of two numbers
// print multiplaction table of given number

var n1=prompt("enter a number to do calculation: ");
switch (n1) {
    case 1:
        console.log("Addition of two numbers: ");
        var a=1;
        var b=10;
        console.log("the sum is "+(a+b));
        break;
    case 2:
        console.log("subtraction of two number: ");
        var a=1;
        var b=10;
        console.log("the subtraction is "+(a-b));
        break;
    case 3:
        console.log("multiplication of two number: ");
        var a=1;
        var b=10;
        console.log("the multiplication is "+(a*b));
        break;
    case 4:
        console.log("division of two number: ");
        var a=1;
        var b=10;
        console.log("division is "+(a/b));

        break;
    case 5:
        console.log("remainder of two number: ");
        var a=1;
        var b=10;
        console.log("division is "+(a%b));
        break;
    case 6:
        console.log("percentage of two numbers");
        var a=1;
        var b=10;
        console.log("division is "+(a%b));
        break;
    case 7:
        console.log("sunday");
        break;   

    default:
        console.log("not a valid number");
        break;
}