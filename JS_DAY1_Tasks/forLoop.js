// 1. takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
let number = window.prompt("Enter the number: ")
function checkPrimeNumber(number) {
    if (number <= 1) {
        flag = 0;
        return;
    }
    if (number === 2) flag == 1;
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            flag = 1;
            break;
        }
    }
}

let flag = 0
let integer = window.prompt("Enter the integer: ")
checkPrimeNumber(integer);
if (flag == 0)
    alert("The number is prime");
else
    alert("The number is not prime");

// 2. takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form
var userInput = window.prompt("Enter input value: ");
function HarmonicNumber(userInput) {
    for (let index = 1; index <= userInput; index++) {
        harmonicNumber += 1 / index;
    }
}
let harmonicNumber = 0;
HarmonicNumber(userInput);
alert(`Harmonic number is : " ${harmonicNumber}`);

// 3. that takes a input and determines if the number is a prime.
let num = window.prompt("Enter the number : ")
function isPrime(num) {

  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}
isPrime(num);

// 4. take a range of number as input and output the Prime Numbers in that range.
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
       alert(i);
    }
}

// 5. Write a program that computes a factorial of a number taken as input.
// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
let factNumber = 5;
function factorial(factNumber){
  let answer = 1;
  if (factNumber == 0 || factNumber == 1)
    return answer;
  else
    for(var i = factNumber; i >= 1; i--){
      answer = answer * i;
    }
    return answer;  
}
let n = 4;
answer = factorial(factNumber)
alert(`The factorial of ${factNumber} is ${answer}`);

// 6. Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.
var factNumber = window.prompt("Enter the number: ")
function factorial(factNumber){
    let answer = 1;
    if (factNumber == 0 || factNumber == 1)
      return answer;
    else
      for(var i = factNumber; i >= 1; i--){
        answer = answer * i;
      }
      return answer;  
  }
  let n = 4;
  answer = factorial(factNumber)
  alert(`The factorial of ${factNumber} is ${answer}`);
 