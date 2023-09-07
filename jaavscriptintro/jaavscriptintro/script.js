// Js functions

// in js, they are treated as first class objects or citizen
// in js , functions can be stored in variable, can be passed as an argument to other function
// and also can be returned from a fcuntion body.
//normal function
// function fun(param1,param2){

// }
// fun(arg1,arg2)

// anonymous function : functional expression

// Undefined :its not error : its a special keyword or placeholder
// evertime in js function , js expects that function is returning something.
// let fun =function (){
//   let a =10;
//   console.log(10);
//   return a;
// }
// console.log(fun,"what is inside variable");
// console.log(fun(),"calling the varaible");

// Arrow function  : functional expression

// let fun = (param1,param2)=>{
// //function body
// }
// fun();

// IIFE : Immediately invoked functional expression
// 
// ((param1,param2)=>{

// })(arg1,arg2)


// very important for making logics for API call;
// ((a,b)=>{
// let c=a+b;
// console.log(c,"output from IIFE");
// })(2,3)

// es6 : ecmascript v6;arrow function ,IIFE ,let and const
//rest operator : es6 variant 
// function fun(...a){
//   console.log(a,"this are all the argument coming in paramater");
// }
// fun(2,3,1,4,5,6)

// function to argument of another function
function addition(a,b){
    let c=a+b;
    return c
}

function calc(a,b,add){
    // a, b are variable storing number , add: varaible storung function
  return add(a,b)
}

console.log(calc(2,3,addition),"sumation function working inside calc function")


