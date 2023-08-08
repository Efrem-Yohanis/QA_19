
// // 10,20
// let num1 = 10;
// let num2 = 20;
// let num3 = num1 + num2;
// console.log(num3)

// //40, 100

//  num1 = 40;
//  num2 = 100;
//  num3 = num1 + num2;
// console.log(num3)

// // 30 , 50

// num1 = 30;
// num2 = 50;
// num3 = num1 + num2;
// console.log(num3)

// // 70,90

// num1 = 70;
// num2 = 90;
// num3 = num1 + num2;
// console.log(num3)

// adding two number and print the result. with the diffrent value or data 


// 1. bulit in jascript function

 //typeof()
// toString()
// Number()
// parseInt()
// parseFloat()

// let result = typeof(num1);  // call
// console.log(result)

// 2. custome function  developer (coder )
        //  1. def
                 // declartion -> //function keyword
        //  2.call -> to use
// list of paramate

function addTwonum(num1,num2)
{
    let sum = num1 + num2;
    return sum;

}

let r1 = addTwonum(10,20);
let r2 = addTwonum(40,100);
let r3 = addTwonum(30,50);
let r4 = addTwonum(70,90);

console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)

console.log(typeof(addTwonum))


// n = 10 
// 2+4+6+8+10
// 30
// ------------------------------ function example ----------------------------//
function functionName(n)
{
    let sum = 0;  // var
    for(let i=0; i<=n; i++)
    {
        if(i % 2 == 0)
        {
            sum = sum + i
        }
    }
    console.log(sum)
   
}

functionName(20);

// ----------------------------- Anonymous Functions -------------------------------//


let sub = function (num1,num2)
{
    let sub = num1 - num2;
    return sub;

};
// ------------------------------------- Arrow Function -----------------------------
let sub2= (num1, num2) => {
    let sub = num1 - num2;
    return sub;
}



have.length





