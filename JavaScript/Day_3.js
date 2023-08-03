//------------------------------------------ if,  ------------------------------//
console.log("------------------------------ if,   ------------------------------")

if(true)
{
  console.log("Task 1")
}
 
//------------------------------------------ if, else ------------------------------//
console.log("------------------------------ if, else  ------------------------------")
// if , else

n = -20
if(n % 2 == 0)
{
    console.log("This is even number")
}
else{
    console.log("This is odd number")
}


// number is even or odd 

// even   n % 2 == 0    10 % 2 == 0, 11 % 2 == 1, 12 % 2 == 0, 


if(n > 0)
{
    console.log("This is +ve number")
}
else{
    console.log("This is -ve number")
}
//------------------------------------------ if, else if , else------------------------------//
console.log("------------------------------ if, else if , else ------------------------------")
// if, else if , else
let month = 5

if( month == 1)
{
    console.log("This is  JAN")
}

else if(month == 2)
{
    console.log("This is  Feb")
}
else if(month == 3)
{
    console.log("This is  Mar")
}

else if(month == 5)
{
    console.log("This is  May")
}

else if(month == 6)
{
    console.log("This is  Jun")
}

else if(month == 7)
{
    console.log("This is  Jul")
}

else if(month == 8)
{
    console.log("This is  Aug")
}

else if(month == 9)
{
    console.log("This is  Sep")
}

else if(month == 10)
{
    console.log("This is  Oct")
}

else if(month == 11)
{
    console.log("This is  Nov")
}

else if(month == 12)
{
    console.log("This is  Dec")
}
else{
    console.log("Invalid")
}


//------------------------------ switch------------------------------//
console.log("------------------------------ switch------------------------------")

month = 10
switch(month)  // 10 data (value) and type number  (===)
{
  case 1:
    console.log("This is  JAN")
    break;

  case 2:
    console.log("This is  Feb")
    break;

   case 3:
    console.log("This is  Mar")
    break;

    default:
        console.log("Invalid")

}


day = 5
switch(day)  // 10 data (value) and type number  (===)
{
  case 1:
    console.log("Sunday")
    break;

   case 2:
    console.log("Monday")
    break;

   case 3:
    console.log("Tusday")
    break;

    case 4:
    console.log("Wednesday")
    break;

    case 5:
    console.log("Thursday")
    break;

    case 6:
    console.log("Friday")
    break;

    case 7:
    console.log("Saturday")
    break;

    default:
        console.log("invalid")
} 


n=100
if(n > 0)
{
    console.log("this number is +Ve")
}
else
{
    console.log("this number is -Ve")
}
// ---------------------------------------------- Ternary operators in JavaScript ----------------------------//
// condition ? exprIfTrue : exprIfFalse
console.log("------------------Ternary operators in JavaScript --------------------------")

let y = 100

let result = y > 0 ? "this number is +Ve" : "this number is -Ve";

console.log(result)

let no = 70; 

let result1 = no % 2 === 0 ? "Even" : "Odd";

console.log(result1);

let x= 16
let result2 = x % 2 !== 0 ? "this number is odd" : "this number is even";
console.log(result2)

// i++
// i=i+1
// i+=1
let sum = 0;
for(let i=1; i<=10; i+=2)
{
    sum = sum + i;
}
// console.log(sum)
// 1+2+3+4+5+6+7+8+9+10

// ------------------------------------ While Loop--------------------------------------
console.log("------------------While Loop in JavaScript --------------------------")

let sum1 = 0;
let j=1;  
while(j<=10)
{
    sum1 = sum1 + j;
    j++;
}
console.log(sum1)



// i = 10;
// i=i+100
// i+=100
// i=10+100

// ------------------------------ do while loop -------------------------------//

console.log("------------------ do while loop in JavaScript --------------------------")

sum = 0;
let t=1;  
do{
  sum = sum + t;
  t++;
}while(t<=10);

console.log(sum)

// -------------------------------- break --------------------------------//
console.log("------------------break in JavaScript --------------------------")
for(let i=1; i<=10; i++)
{
    if(i == 8)
    {
        break;
    }
    console.log(i)
}

// -------------------------- continue ----------------------------------//
console.log("------------------ continue in JavaScript --------------------------")
for(let i=1; i<=10; i++)
{
    if(i % 2 != 0)
    {
       continue;
    }
    console.log(i)
}

