//---------------------- comment --------------------------------//
// single line comment
/* 
Multi-line Comments

*/


//

x = 10;  // 10 -> data , value
y = 'this is day2 class'; 
z = true;
q = false;
// name = 'Efrem';
Age = 25 ; 

// A-Z, a-z, 0-9 , _,$
// can not start with number 0-


// var, let, const
 
let a = 10;  // decla and  // asignem

// 1. not re decla
    // let a
// 2. block scope

{
    let b = 20; 
   // console.log(b);
}

let b = 30;
//console.log(b)

// 3. const re-assign
const f = 100;


// 1. data type 
// 1. number data type
let num = 100; // integer number 
console.log(num)
console.log(typeof(num0));
let mark = 90.8; // float number
console.log(mark)
console.log(typeof(mark));
let price = 100.98
console.log(price)
let hight = 1.73 
console.log(hight)
let numberOfstudent = 10 ;
console.log(numberOfstudent);

// 2. Stirng data type
let greeting = 'Hello world'; 
console.log(greeting);
console.log(typeof(greeting));
let message = "hi every one";
console.log(message)
let name = '1231231@3354%^&&**(dfsdfssfs'
console.log(name)
let g = "123" 
console.log(g) 

// 3 Boolean Data type 

let inProgress = true;
console.log(typeof(inProgress));
let completed = false;

let isActive = true;



// 4. undefined: 

let t;
console.log(t)

var i;
console.log(i)

const j = 34; // const can not be undefined

// 5. Null

var p = null;
console.log(p)

// 6. NaN: Not a Number 

let o = 10/'ertuy'

console.log(o)

let counter = 120; // counter is a number data type 
counter = false; // counter is now a boolean data type
counter = "this is new data"; // counter is now a string


// -------------   typrof() -----------------------------
console.log("---------------------------- typeof example----------------------------")
let data1 = 100;
console.log(typeof(data1))

let data2 = 'craft';
console.log(typeof(data2))

let data3 = true;
console.log(typeof(data3))

let data4;
console.log(typeof(data4))

let data5 = null;
console.log(typeof(data5))

//-------------------- type convertion ----------------------------
console.log("---------------------------- type convertion example----------------------------")
// number to string
let data6 = 100;
console.log(data6,typeof(data6));

let data7 = data6.toString();
console.log(data7,typeof(data7))
// string to number 

let data8 = "1234"; // --> 1234 value but type is String
console.log(data8,typeof(data8));

let data9 = Number(data8);
console.log(data9,typeof(data9));

let data10 = parseInt(data8)
console.log(data10,typeof(data10));

let data11 = parseFloat(data8)
console.log(data11,typeof(data11));

// ----------------------- JAVASCRIPT OPERATORS -------------------------------//
console.log("---------------------------- Arithmetic Operators example----------------------------")

// 1. Arithmetic Operators:
// + ,-,*,/,%, **

let num1 = 10; 
let num2 = 2; 

let num3 = num1 + num2 ; // 12
console.log(num3)

num3 = num1 - num2 ; // 12
console.log(num3)

num3 = num1 / num2 ; // 5
console.log(num3)

num3 = num1 * num2 ; // 20
console.log(num3)

num3 = num1 ** num2 ; // 100
console.log(num3)

num3 = 16 % 4 ; // 0 
console.log(num3)



console.log("---------------------------- Assignment Operators example----------------------------")


x = 10; // normal assignment 
console.log(x)
x += 5; // => x =x + 5; 
x -= 5; 
x *= 5; 
x **= 5; 
x /= 5; 
x %= 5; 


console.log("---------------------------- Comparison Operators example----------------------------")

// == value not  type
// === data type and value
// >
// <
// <=
// >=
// != not equle  (==)
// !== not equle  (===)

// resulet = true or false 

// let n1= 10;   // value = 10  type = number
// let n2 = "10"  // value = 10 type = String
// let n3 = 100  // value 100 type = number;

// let res = n1 == n2 
// console.log(res)

// res = n1 === n2
// console.log(res)

// res = n3 > n1;
// console.log(res)

// res = n3 < n1;
// console.log(res)

// res = n3 >= n1;
// console.log(res)


// res = n3 <= n1;
// console.log(res)


// res = n1 != n2;   // !=  (==)
// console.log(res)


// res = n1 !== n2;
// console.log(res)       // !== (===)


// // --------------------------------------- Logical Operators: -----------------------------------------
// console.log("---------------------------- Logical Operators example----------------------------")

// // &&  (and)
// // ||  (or)
// // !   (not)

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)



// console.log((3 == 4) && (4 == 4) || (true) && (false))


console.log(!true)
console.log(!false)


console.log(!((3 == 4) && (4 == 4) || (true) && (false)))
                

