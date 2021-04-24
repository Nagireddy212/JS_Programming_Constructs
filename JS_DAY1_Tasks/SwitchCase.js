// 1.Read a single digit number and write the number in word 
var number = window.prompt("Enter the number: ")
function getWord(number) {
    switch (number) {
        case "1":
            alert("Monday");
            break;
        case "2":
            alert("Tuesday");
            break;
        case "3":
            alert("Wednesday");
            break;
        case "4":
            alert("Thursday");
            break;
        case "5":
            alert("Friday");
            break;
        case "6":
            alert("Saturday");
            break;
        case "7":
            alert("Sunday");
            break;
        default:
            alert("Invalid Number");
    }
}
getWord(number);

// 2. Read a Number and Display the week day (Sunday, Monday,...)
var num = window.prompt("Enter the number: ")
function getWord(num) {
    switch (num) {
        case "0":
            alert("ZERO");
            break;
        case "1":
            alert("ONE");
            break;
        case "2":
            alert("TWO");
            break;
        case "3":
            alert("THREE");
            break;
        case "4":
            alert("FOUR");
            break;
        case "5":
            alert("FIVE");
            break;
        case "6":
            alert("SIX");
            break;
        case "7":
            alert("SEVEN");
            break;
        case "8":
            alert("EIGHT");
            break;
        case "9":
            alert("NINE");
            break
        default:
            alert("Invalid Number");
    }
}
getWord(num);

// 3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
var unit = window.prompt("Enter the Unit value: ")
function displayUnit(unit) {
    switch (unit) {
        case "1":
            alert("Units");
            break;
        case "10":
            alert("Tens");
            break;
        case "100":
            alert("Hundreds");
            break;
        case "1000":
            alert("Thousands");
            break;
        case "10000":
            alert("Ten Thousands");
            break;
        case "100000":
            alert("Lakhs");
            break;
        case "1000000":
            alert("Ten Lakhs");
            break;
        case "10000000":
            alert("Crores");
            break;
        case "100000000":
            alert("Ten Crores");
            break;
        default:
            alert("Invalid unit");
    }
}
displayUnit(unit);

// 4. takes User Inputs and does Unit Conversion of different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet
var input = window.prompt("Enter the input: ")
var value = window.prompt("Enter the value: ")
function unitConversion(input, value) {
    switch (input) {
        case "1":
            let inch = value * 12;
            alert(`${value}  Feet =  ${inch} Inch`);
            break;
        case "2":
            let meter = value * 0.3048;
            alert(`${value} Feet =  ${meter} Meter`);
            break;
        case "3":
            let feet = value / 12;
            alert(`${value} Inch = ${feet}  Feet`);
            break;
        case "4":
            let feetMeter = value * 3.28084;
            alert(`${value} Meter = ${feetMeter}  Feet`);
            break;
        default:
            alert("Invalid input for the conversion");
    }
}
unitConversion(input, value);