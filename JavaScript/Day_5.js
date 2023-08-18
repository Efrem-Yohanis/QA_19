
// let x1=1;
// let x2=2;
// let x3=4;
// let x4=0;
// let x5=8;
// let x6=5;
// let x7=6;

// console.log(x1)
// console.log(x2)
// console.log(x3)
// console.log(x4)
// console.log(x5)
// console.log(x6)
// console.log(x7)

// ------------------------------ Creating Array --------------------------------//

// 1. Litral way.
// a-z, A-Z,0-9,$,_
//       0,1,2,3,4,5,6
let List_number = [1,2,4,0,8,5,6]
      //-7,-6,-5,-4,-3,-2,-1
let studentInfo = ['efrem',13342,true,90.8,'A']
let y =[] // array with out element
y[0]=1;
y[1]=2;
y[2]=4;
y[3]=0;
y[4]=8;
y[5]=5;
y[6]=6;
// console.log(x)
// console.log(studentInfo)

// 2. Array () way.

let a = new Array(4)  // array with 4 size 
let b = new Array(1,2,4,0,8,5,6) // array with inital data
let color = Array('red') //with out new keyword


//----------------- Accessing Array Elements-------------------
//[1,2,4,0,8,5,6]
// 1. arrayName[index] 
console.log("//------------- array[index] ---------------")
       console.log(List_number[0])  // 1
       console.log(List_number[1])  // 2
       console.log(List_number[2])  // 4
       console.log(List_number[3])  // 0
       console.log(List_number[4])  // 8
       console.log(List_number[5])  // 5
       console.log(List_number[6])  // 6
// 2. arrayName.at(index)
console.log("//------------- arrayName.at() for +Ve ---------------")
    console.log(List_number.at(0))
    console.log(List_number.at(1))
    console.log(List_number.at(2))
    console.log(List_number.at(3))
    console.log(List_number.at(4))
    console.log(List_number.at(5))
    console.log(List_number.at(6))
    console.log("//------------- arrayName.at() for -Ve ---------------")
    console.log(List_number.at(-1))
    console.log(List_number.at(-2))
    console.log(List_number.at(-3))
    console.log(List_number.at(-4))
    console.log(List_number.at(-5))
    console.log(List_number.at(-6))
    console.log(List_number.at(-7))

// ---------------------------- How to get array size --------------------//

// syntax 
// arrayName.length // size
console.log("---------------- Array Size------------------")
console.log(List_number.length) //7

// -------------------------- iterate Array ----------------//
//.1 ---------------------- for loop --------------------------------------
console.log("-------- For loop ------------")
for(let i = 0; i<7; i++)
{
    console.log(List_number[i]) 
                 
}

// ---------------------- forEach() --------------------------------------
console.log('------------------- forEach ----------------')

//[1,2,4,0,8,5,6] 
List_number.forEach(element=>console.log(element))

// --------------- for of -----------------
console.log('------------------- for of ----------------')
for(let element of List_number)
{
    console.log(element)
}

console.log('------------------- for in ----------------')
for (let index in List_number)
{
    console.log(List_number[index])
}

// ------------------------------ Array Methods -------------------------//
//[1,2,4,0,8,5,6,] 
// 1. push() to add element at the end
console.log("---------------- push() method--------------")
List_number.push(10)
console.log(List_number)
List_number.forEach(ele=>console.log(ele))
// 2. unshift()
console.log("---------------- unshift() method--------------")
List_number.unshift(100)
console.log(List_number)
List_number.forEach(ele=>console.log(ele))
console.log("---------------- pop() method--------------")
List_number.pop()
console.log(List_number)
List_number.forEach(ele=>console.log(ele))
console.log("---------------- shift() method--------------")
List_number.shift()
console.log(List_number)
List_number.forEach(ele=>console.log(ele))

console.log("---------------- indexof() method--------------")
console.log(List_number.indexOf(0))


console.log("---------------- include() method--------------")
console.log(List_number.includes(100))

console.log("---------------- concat() method--------------")
let List_number1=[100,200,300,400,500]
let List_number2=List_number.concat(List_number1)
console.log(List_number2)




//List_number.splice(3, 23);
List_number.splice(0, 0, 50);

//.splice(start_position, 0, new_element...);
console.log(List_number)

let array1 = [1,2,3,4]  // 1,2,3,4  ->

// ------------------------------ multi- Dimensiona array-------------------------

let array2 = [ 
              [1,2],
              [4,5],
              [7,8],
              [9,0]
            ]
console.table(array2)
console.log(array2[2][1])

//               s      n     b    n    s
studentInfo = ['efrem',13342,true,90.8,'A']
            //  name   id,   status,mark ,grade