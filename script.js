// alert("Shahariar!")

//Comment value and variable
/*console.log("Babu")
console.log(23)

console.log(firstName)
let firstName = "Shahariar"
console.log(firstName)*/

//Comment Data type

//Object & primitive
//primitive Null, Undefined, String, Number, Boolean, Symbol, Bigint

//Comment let,const,var

/*let age = 30
console.log(age)
age = 40
console.log(age)
let age = 50*/

/*const age = 50
console.log(age)
age = 60
console.log(age)*/

/*var age = 50
console.log(age)
var age = 60
console.log(age)
age = 70
console.log(70)*/

//Comment Basic Operator

//Math or Arithmatic operator(+,-,*,/,%)
/*const age = 2023-1997
console.log(age)
const num = 4%2
console.dir(num)*/

//Exponential Operator
/*const expo = 2**4
console.log(expo)*/

//String concatenate
/*const firstName = "Shahariar"
const lastName = "Rahaman"
console.log(firstName + " " +lastName)*/

//Assigenment Operator
/*let x = 10
x += 10
console.log(x)
x *= 10
console.log(x)
x /= 10
console.log(x)
x %= 10
console.log(x)*/

//Increment & Decrement
/*let x = 10
console.log(x++)
console.log(x)
console.log(--x)
console.log(x--)
console.log(x)*/

//Compersion Operator <, >, <=, >=
/*const x = 10
if(x<9)
console.log("Yes 1")
else if(x>12)
console.log("yes 2")
else if(x<=12)
console.log("Yes 3")
else if(x>=12)
console.log("Yes 4")
else
console.log("No")*/

//Comment Operator Precedance

//Math Operator(Left to Right)
//console.log(25-10+5*2/10) // Division Piroty 1st

//Comment String and Template Literal
/*const firstName = "Shahariar"
const lastName = "Babu"
console.log("I'm" + " " + "Shahariar" + " Babu")
console.log(`I'm ${firstName} ${lastName}`)
console.log(`I'm ${2+5}${69}`)*/

//Comment Type Conversion and Coersion
/*console.log("I'm" + " " + 23 + " " + "Years Old")
const number = "1997"
console.log(typeof Number(number))
const name = "Babu"
console.log(typeof Number(name))// NaN is invalid Number
const newNumber = 0
console.log(Boolean(newNumber))
console.log(String(newNumber))
console.log(newNumber)*/

//Comment Truthy and Falsy Value
/*console.log(Boolean(0))
console.log(Boolean(false))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean(NaN))

if(0)
{
    console.log("Ok")
}
else{
    console.log("Not Ok")
}*/

//Comment Strict Equality and Lose Equality

/*if(10 == "10")
console.log("Wrong, But It's Work")
if(10 === "10")
console.log("Wrong and Not Work")
if(10 === 10)
console.log("Work")*/

//Comment Logical Operators
/*const one = true
const two = true
console.log(one && two)
console.log(one || two)
console.log(one && !two)
console.log(one || !two)*/

//Comment The Switch Statement

/*const number = 2
switch(number){
case 1 :
    console.log("One")
    break;
case 2 :
    console.log("Two")
    break;
case 3 :
    console.log("Three")
    break;
case 4 :
    console.log("Four")
    break;
default:
    console.log("Nothing")
}*/

//Comment Statement & Expression

/*const number = 5+3
console.log(2+2)
console.log(number)*/

//Comment Conditional Ternary Operator

/*true ? console.log("True"): console.log("False")
false ? console.log("True"): console.log("False")

const age = Number(prompt("Input A Number"))
age >= 18 ? console.log("You can make sex") : console.log("You can't make sex")*/

//Comment Activating Strict Mode
/*"use strict"
let number = false
console.log(number)
booleanTrue = true
if(booleanTrue){
    numer = true 
}
if(number == true){
    console.log("Hi")
}*/

//Comment Function 

/*function sum(a,b){
    const sum = a+b
    return sum
}
console.log(sum(5,6))
console.log(sum(11,15))*/

//Comment Function Expression

/*const sum = function(a,b){
    const sum = a+b
    console.log(sum)
    return sum
}
console.log(sum(41+9,5))*/

//Comment Arrow Function

/*const sum =(a,b)=> a+b
console.log(sum(5,6))

const sub = (a,b) => {
    const sub = a-b
    return sub
}
console.log(sub(10,5))*/

//Comment Function Calling in Other Function

/*function cut(fruit){
    return fruit*4
}
function fruit(a){
        return cut(a)
}
console.log(fruit(2))*/

//Comment Introduction to Array

/*const arr = [1,"Shahariar",true,undefined,NaN]
const newArr = []
for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
    newArr.push(typeof arr[i])
}
console.log(newArr)
console.log(newArr.pop())
console.log(newArr)
console.log(newArr.unshift("boolean"))
console.log(newArr)
console.log(newArr.shift())
console.log(newArr)
console.log(newArr.indexOf("string"))
console.log(newArr.includes("string"))*/

//Comment Introduction of Object

/*const my = {
    name:"Shahariar",
    age: 23,
    address: "Savar"
}
console.log(`I am ${my.name}. I am ${my.age} Location ${my.address}.`)
console.log(`I am ${my["name"]}. I am ${my["age"]} Location ${my["address"]}.`)
const input = prompt("Input a Key")
console.log(my[input])*/

//Comment Object method

/*const my = {
    name:"Shahariar",
    address: "Savar",
    age: function(year){
        const calculateAge = 2023 - year
        return calculateAge
    }
}
console.log(my.age(1997))
console.log(my["age"](1997))

const newMy = {
    name:"Shahariar",
    address: "Savar",
    year: 1997,
    age: function(){
        return 2022-this.year
    }
}
console.log(newMy.age())
console.log(newMy["age"]())*/

//Comment Break,Continue

/*const arr = [1,2,"Shahariar",true]
for(let i=0; i<arr.length; i++){
    if( typeof arr[i] === "number")
    continue;
    console.log(arr[i])
}
const array = [1,2,"Shahariar",true]
for(let i=0; i<array.length; i++){
    if( typeof array[i] === "string")
    break;
    console.log(array[i])
}
const arra = [1,2,"Shahariar",true]
for(let i=arra.length-1; i>=0; i--){
    console.log(arra[i])
}*/

//Comment The while Loop

/*const array = [1,2,"Shahariar",true]
let i = 0
while(array.length>i){
    console.log(array[i])
    i++
}*/

//Comment Scopes
/*var x = 23
function childWorld(){
    x = 20
    console.log(x)
    var x = 10
    console.log(x)
    a = 30
}
childWorld()
console.log(x)
console.log(a)

//Comment Closure

function bankBlance(taka){
    var  ammount = taka
    return function(){
        return ammount
    }
    
}
console.log(bankBlance(10000)())
const output = bankBlance(10000)
console.log(output())

(function (){
    console.log(5)
})()

//Comment Hoisting

console.log(hoisting)
var hoisting
console.log(hoisting)

// console.log(hoisting2)
let hoisting2
console.log(hoisting2)
hoisting2 = "Babu"
console.log(hoisting2)

console.log(sum())
function sum(){
    return 2
}

// console.log(sum())
// const sum = function(){
//     return 0
// }

var language = 1
function lan(){
    language = "Java"
    var language
    console.log(language)
}
lan()*/

//Comment Execution Stack

/*var name = "Shahariar"
function one(){
        console.log(two())
        return "One"
}
function two(){
        console.log(three())
        return "Two"
}
function three(){
        return "Three"
}
console.log(one())*/

//Comment Test
/*let variable = "Babu"
function babu(){
    return function(){
        return variable
    }
}
console.log(babu()())*/

//Comment This

/*// function thisKey(){
//     console.log(this)
//     this.name = "Shahariar"
//     this.roll = 2
//     return {name,roll}
// }
// console.log(thisKey())

// const one = {
//         fun: ()=>{
//         console.log(this)
//         return ()=>console.log(this)
//         }
//     }
// one.fun()()

// 'use strict'
// const two = {
//         fun: function(){
//         console.log(this)
//         return function(){console.log(this)}
//         }
//     }
// two.fun()()

// const three = {
//         fun: function(){
//         console.log(this)
//         return ()=>{console.log(this)}
//         }
//     }
// three.fun()()

// const four = {
//         name: "Babu",
//         fun: function(){
//             console.log(this)
//         },
//         fun2: ()=>{
//             console.log(this)
//         }
//     }
// four.fun2()*/

//Comment call(),bind(),apply()

/*const newFun = {
        name: 'Shahariar',
        id: 182,
        age:{
            age: 25
        },
        obj1:{
            year:23,
            hello:{
                look: "cool",
                reply:function(a){   
                console.log(this,a)
                }
            },
            fun1:function(a){
                console.log(this,a)
            }
        }
        
}
const hi ={
    name: "Babu"
}
// newFun.obj1.fun1.call(newFun,"Hi!")
// newFun.obj1.fun1.apply(newFun,["Hi!"])
// newFun.obj1.fun1.apply(hi,["Hi!"])
// const bindMethod = newFun.obj1.fun1.bind(hi,"Hi!")
// bindMethod()
// newFun.obj1.hello.reply.call(obj1,"Hi")*/

//Comment Primitive Data VS Object

/*let a = 10
let b = 20
function swap1(x,y){
    let temp = x
    x = y
    y = temp
    console.log(x,y)
}
swap1(a,b)
console.log(a,b)


const obj = {
    a : 10,
    b : 20
}
function swap2(obj){
    let temp = obj.a
    obj.a = obj.b
    obj.b = temp
    console.log(obj.a,obj.b)
}
swap2(obj)
console.log(obj.a,obj.b)*/

//Comment Prototype

/*const arr = [2]
console.log(arr.__proto__===Array.prototype)*/

//Comment Wrapper Function

// const num = new Number(2)
// console.log(num)

//Comment Function Constructor

/*const Person = function(name,id,section){
    this.name = name;
    this.id = id;
    this.section = section
    this.age =function(year){
        return 2023-year
    } 
}

const shahariar = new Person("Shahariar", "182-15-2112", "A", 1997)
const siflu = new Person("Siflu", "182-15-2111", "A")
console.log(shahariar.name, shahariar.id, shahariar.section, shahariar.age(1997))
console.log(siflu.name, siflu.id, siflu.section)*/

/*const Person = function(school,college,university){
            this.school = school;
            this.college = college;
            this.university = university
}

Person.prototype.age = function(year){
        return 2023 - year
}

const shahariar = new Person("St. Josepsh", "Savar Model College", "Daffodil UV")
console.log(shahariar.age(1997))
console.log(shahariar.school, shahariar.college, shahariar.university)
console.log(Person.prototype)*/

/*const Client = function(name,age,school,college,uv){
    Person.call(this,school,college,uv,age);
    this.name = name;
    // this.age = age
}
const ridoy = new Client("Ridoy", 26, "St. Josepsh", "Savar Model College", "Daffodil UV")
console.log(ridoy.name, ridoy.age, ridoy.school, ridoy.college, ridoy.uv)*/

//Comment IIFE

/*(
    function one(){
        let msg = "Hi"
        console.log(msg)
    }
)()

{
    var value1 = 10
    var value2 = 20
}
console.log(value1, value2)

{
    let a = 10 
    let b = 20
}
console.log(a, b)

{
    var one = function(){
        var age = 23
        //console.log(age)
        return age
    }
}
console.log(one())

{
    let two = function(){
        let age = 23
        //console.log(age)
        return age
    }
}
console.log(two())*/

const str = "I'm Shahariar Rahaman Babu"
console.log(str.startsWith("I"))

const str2 = "I'm Shahariar Rahaman Babu"
console.log(str.endsWith("u"))

const str3 = "I'm Shahariar Rahaman Babu"
console.log(str.includes("u"))

const str4 = "I'm Shahariar Rahaman Babu"
console.log(str.repeat(5))