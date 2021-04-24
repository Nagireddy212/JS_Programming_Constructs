// 1. reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value
const count = 5;
let maxValue = 0;
let minValue = 0;
let index = 1
while(index <= count){
    let number = Math.floor(100 + Math.random() * 900 );
if (index == 1 ){
    maxValue = number;
    minValue = number;
}
if (number < minValue ){
    minValue = number;
}
else if (number > maxValue){
    maxValue = number;
}
index++;
}
console.log("Maximum Value : "+maxValue+" Minimum Value : "+minValue);

// 2. takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.
var date = window.prompt("Enter date: ");
var month = window.prompt("Enter month: ");
if ( (month <= 6 & date <= 20) )
        alert(` ${month} ${date} True`);

else if ( (month >= 3 & month < 6) & (date<31)  )
        alert(` ${date} ${month} True`);

else
	alert(`InValid date and month `);
    
// 3. Checking given year is leap year or not
var year = window.prompt("Enter year: ");
if ((year % 100) === 0 ? (year % 400) === 0 : (year % 4) === 0){
alert(`Given ${year} is leap year`);
}
else {
    alert(`Given year ${year} is not a leap year`);
}

// 4. coin flip and print out "Heads" or "Tails" accordingly.
let random = Math.floor(Math.random() * 10) % 2;
if (random == 0)
    console.log(`It is Heads`);
else
    console.log(`It is Tails`);