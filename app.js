//Data Types

let a = 5;
let b = 20;

let name = "kapuy";
let char = 'a';

//Arithmetic & Logical Statements

let sum = a+b;
console.log(sum);

let minus = a-b;
console.log(minus);

let multiply = a*b;
console.log(multiply);

let divide = a / b;
if (b != 0) {
    
} else{
    console.log("Error: Division by zero is not allowed.");
    return;
}
console.log(divide);

//Conditional Statements

let age = 20;
if (age >= 19) {
    console.log("kapuy na");
} else {
    console.log("hatdog");
}

let buhat = 'B';

switch (buhat) {
  case 'A':
    console.log('ngi');
    break;
  case 'B':
    console.log('ambot');
    break;
  case 'C':
    console.log('ha');
    break;
  case 'D':
    console.log('heh');
    break;
  default:
    console.log('ambot oy');
}

//LOOPS

for (let n = 0; n < 5; n++) {
    console.log("For Loop "+n);
}

let v = 0;
while (v < 5) {
    console.log("While Loop "+v);
    v++;
}

//Functional Programming

function showOddorEven(){
    if(a%2==0){
        let result = console.log("Odd");
    } else {
        let result = console.log("Even");
    }
} 
function showPrime(){
    if(a%2==1){
        let result = console.log("Number is Prime");
    } else {
        let result = console.log("Number is not Prime");
    }
} 
console.log(showOddorEven());
console.log(showPrime());