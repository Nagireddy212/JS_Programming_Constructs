// 1. degF or degC based on their Conversion
function fToC(fahrenheit) 
{
 	const fToCel = (fahrenheit - 32) * 5 / 9;
 	alert(`Fahrenheit to deg centigrade convertion : ${fToCel} C`);
}
 
function cToF(celsius) 
{
	const cToFahr = celsius * 9 / 5 + 32;
  	alert(`deg centigrade to Fahrenheit convertion : ${cToFahr} F`);
  
}

let userSelection = window.prompt("Select any one Option 1. F-C 2. C-F: ");
switch(userSelection){
	case "1":
		var fahrenheit = window.prompt("Enter the Temparature: ");
		fToC(fahrenheit)		
		break;
	case "2":
		var celsius = window.prompt("Enter the Temparature: ");
		cToF(celsius)
		break;
	default: 
		alert("Invalind input given");
		break;
}

// 2. check if the number is Palindrome or not
function checkPalindrome(str) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        alert('It is a palindrome');
    }
    else {
       alert('It is not a palindrome');
    }
}
const string = prompt('Enter a string: ');
checkPalindrome(string);

// 3. check if the number is a Prime then show that its palindrome is also prime

var num = window.prompt("Enter the number: ");
function checkPrime(num) {
              
            var i, flag = true;
              
            for(i = 2; i <= num - 1; i++)
                if (num % i == 0) {
                    flag = false;
                    break;
                }
            if (flag == true)
                alert(`is prime ${num}`);
            else
                alert(`is not prime ${num}`);
        }

function Palindrome(num)
	{
		var rem, temp, final = 0;

		temp = num;
		while(num>0)
		{
			rem = num%10;
			num = parseInt(num/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			alert("The inputed number is Palindrome");
		}
		else
		{
			alert("The inputted number is not palindrome");
		}
	}

	Palindrome(num);
	checkPrime(num);