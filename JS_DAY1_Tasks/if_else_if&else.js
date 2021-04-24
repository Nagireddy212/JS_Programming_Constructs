// 1. read single digit number and write into word 
number = window.prompt("Enter number: ");
function NumberToWord(number){
    if (number == 0)
        alert("Zero");
    else if (number == 1)
        alert("One");
    else if (number == 2)
        alert("Two");        
    else if (number == 3)
        alert("Three");
    else if (number == 4)
        alert("Four");
    else if (number == 5)
        alert("Five");
    else if (number == 6)
        alert("Six");
    else if (number == 7)
        alert("Seven");
    else if (number == 8)
        alert("Eight");
    else if (number == 9)
        alert("Nine"); 
    else 
        alert("Invalid Number");
    }
NumberToWord(number);

// 2. read number and display the week day 
var num = window.prompt("Enter number: ");
function NumberToWeekDay(num){
    if (num == 1)
        alert("Day 1 is Monday");
    else if (num == 2)
        alert("Day 2 is Tuesday");        
    else if (num == 3)
        alert("Day 3 is Wednesday");
    else if (num == 4)
        alert("Day 4 is Thursday");
    else if (num == 5)
        alert("Day 5 is Friday");
    else if (num == 6)
        alert("Day 6 is Sturday");
    else if (num == 7)
        alert("Day 7 is Sunday"); 
    else 
        alert(`Day ${num} InValid`);
    }
    NumberToWeekDay(num);

// 3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let unitDigitNumber = window.prompt("Enter Unit place number: ")
    function displayUnitsPlace(unitDigitNumber){
        if (unitDigitNumber == 1)
            alert("Units");
        else if (unitDigitNumber == 10)
            alert("Tens");
        else if (unitDigitNumber == 100)
            alert("Hundreds");        
        else if (unitDigitNumber == 1000)
            alert("Thousands");
        else if (unitDigitNumber == 10000)
            alert("Ten Thousands");
        else if (unitDigitNumber == 100000)
            alert("Lakhs");
        else if (unitDigitNumber == 1000000)
            alert("Ten Lakhs");
        else if (unitDigitNumber == 10000000)
            alert("Crores");
        else if (unitDigitNumber == 100000000)
            alert("Ten Crores");
        else 
            alert("Invalid number.");
        }
    displayUnitsPlace(unitDigitNumber);

// 4. Enter three numbers do following arthematic operations
    // 1. a + b * c ;       3. c + a / b;
    // 2. a % b + c;        4. a * b + c;

    var numb1 = window.prompt("Enter number1: ");
    var numb2 = window.prompt("Enter number2: ");
    var numb3 = window.prompt("Enter number3: ");
        function arithmaticOperation(numb1, numb2, num3){
            let value1 = numb1 + numb2 * numb3;
            let value2 = numb1 % numb2 + numb3;
            let value3 = numb3 + numb1 / numb2;
            let value4 = numb1 * numb2 + numb3;
            value.push(value1, value2, value3, value4);
            }
        let value = [];
            arithmaticOperation(numb1, numb2, numb3);
            let maxValue = value[0];
            let minValue = value[0];
            for (let index = 1; index < value.length; index++){
            if (value[index] < minValue)
            minValue = value[index];
            else if (maxValue < value[index])
            maxValue = value[index];
            }
        alert("Array elements : "+value);
        alert("Maximum value in array : "+maxValue+"  Minimum value in array : "+minValue);