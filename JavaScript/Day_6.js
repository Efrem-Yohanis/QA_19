// -------------------------------- Creating JavaScript Objects -------------------------//
//studentInfo = ['efrem',13342,true,90.8,'A']
let studentInfo = {
    Name:'efrem', // property1   -> key:value -> value means exact data
    ID: 13342,  // property2
    isActive: true, // property3
    Mark: 90.8, // property
    Grade:'A', //property

    show: function()
    {
        let Name = "Beki";
        console.log(this.Name);
    }

}

// ---------------------- Using the JavaScript Keyword new ------------------//
let number = new Object()

number.one = '1';
number.two = '2';
number.three = '3';


// ------------------------- Accessing JavaScript object Properties ---------------//
let student_data =[]

student_data.push(studentInfo.Name)
student_data.push(studentInfo.ID)
student_data.push(studentInfo.isActive)
student_data.push(studentInfo.Mark)
student_data.push(studentInfo.Grade)

console.log(student_data)

console.log(studentInfo.Name)
console.log(studentInfo.ID)
console.log(studentInfo.isActive)
console.log(studentInfo.Mark)
console.log(studentInfo.Grade)

console.log("----------------- by using []----------------")

console.log(studentInfo['Name'])
console.log(studentInfo['ID'])
console.log(studentInfo['isActive'])
console.log(studentInfo['Mark'])
console.log(studentInfo['Grade'])

console.log(studentInfo)

delete studentInfo.Grade

console.log(studentInfo)

studentInfo.lastName = "John";

console.log(studentInfo)

function add(num1,num2)
{
    let num3=num1 + num2
    return num3;
}

studentInfo.add = function add(num1,num2)
{
    let num3=num1 + num2
    return num3;  
}




console.log(studentInfo.add(23,4))

studentInfo.show()

// ----------------
console.log("-----------------------------------------------")
for(let key in studentInfo)
{
    console.log(studentInfo[key])
}