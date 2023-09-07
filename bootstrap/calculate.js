// 1question 
// class home{
//     constructor(room,terrace){
//         this.room=room;
//         this.terrace=terrace;
//     }
//     present(){
//         return this.room+ this.terrace;
//     }
// }
// class smartHome extends home{
//     constructor(room,terrace,security){
//         super(room,terrace);
//         this.security=security;
//     }
//     show(){
//         return this.present()+ ""+this.security;
//     }
// }
// let h1=new home("8","2");
// let h2=new smartHome("8","2","locking system and motion sensors");
// console.log(h1,h2);

// 2nd question
// function intergerNum(a){
//     try{
//         if(!Number.isInteger(a)){
//             throw new Error(`${a} it is Not an integer`);
//         }
//         return a;
//     }
//     catch(error){
//         console.log(`${error.message}`);
//     }
// }
// let a=intergerNum(546);
// console.log(a);


// function strlen(str1){
//     try{
//         if(str1.length <5) throw new Error(`${str1} has not sufficient length`);
//         console.log(str1);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// } 
// const str1=strlen("samis");

// function params(a,b){
//     try{
//         if(a==0 || b==0){ 
//         throw Error(`${a} ${b} are zeros`);
//         }
//         console.log(a,b);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// params(11,22);


// function arrayss(arr){
//     try{
//         if(arr.length<5) throw new Error("array has length less than 5")
//         for(let i of arr){
//             console.log(i);
//         }
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// arr=[1,23,3,4]
// arrayss(arr);

class bike{
    constructor(wheels,speed){
        this.wheels=wheels;
        this.speed=speed;
    }
    present(){
        return this.wheels+" wheel and it's speed is "+this.speed;
    }

}
class honda extends bike{
    constructor(wheels ,speed, color,model){
        super(wheels,speed);
        this.color=color;
        this.model=model;
    }
    show(){
        return this.present()+" and it's color and model are "+this.color+" , "+this.model;
    }
}

let bikee=new bike(2,300);
let hondaa=new honda(2,300,"red","honda GT");
// console.log(bikee, hondaa);
console.log(hondaa.show());