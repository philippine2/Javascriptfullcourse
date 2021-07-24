console.log("hello")


//alert("yoo")


//Variable
var b ='smoothie';
//console.log(b);

var someNumber= 45;
//console.log(someNumber);


//var age = prompt("What is your age?");
//document.getElementById('someText').innerHTML = age;

//Numbers in Javascript

// how to increment 
var num1 = 10;
num1++
//num1= num1+1
console.log(num1);

// how to decrement 

//num1=num1-1
num1--
console.log(num1)

// increment or decrement by any number by 10 for example

num1 +=10;
console.log(num1);



// divide, multiply,*, remiander %

console.log(num1 % 5 );

/*function
1. create a function
2. call a function
*/
// Create
function fun(){
    console.log("this is a fucntion");
}
//call
fun();

/* let create a function that take in a name
and says hello followed by your name*/

var name = 'philia';
function Name(){
    console.log("hello"+' '+ name);

}
//Name();
function greeting(yourName){

var result = 'hello' + ' ' + yourName;
console.log(result);
}

//var name = prompt('What is your name?');
//greeting(name);


// How do arguments work in functions?
// How do we add two numbers together in a function
function sumNumbers(num1, num2){
    var result= num1 + num2;
    console.log(result)
}
//sumNumbers(10,10);

// While Loops

var num = 0;

while(num<100){
    num+=1;
    console.log(num)
}


//for Loops

 for(let num =0; num<100; num++){
     console.log(num);
 }


//Datatypes

/* let  yourAge = 18; // number 
 let yourName =" philia" // string
 let name = {first: 'Jane', last: 'Doe'}; // Object
 let truth = false; // boolean 
 let groceries = ["apple","banana", "fruit"]; //array
 let random; //undefined 
 let nothing = null; // value null;
 */

 // strings in Javacript(common method)

 let fruit ="banana, apple, orange";
 let moreFruit= "banana\napple"; // new line
 console.log(moreFruit);

console.log(fruit.length)
console.log(fruit.indexOf("na"))
console.log(fruit.slice(2,4))
console.log(fruit.replace("na", "123"))
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(5))
console.log(fruit[2]);
console.log(fruit.split(','));// split by comma
console.log(fruit.split(''));// split by character











