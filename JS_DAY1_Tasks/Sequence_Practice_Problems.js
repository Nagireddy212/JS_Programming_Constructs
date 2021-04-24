//1. Generate single digit random number
function singleDigitNumber() {
    let randomNumber = Math.floor(Math.random() * 10) % 10;
    console.log(`Single Digit Number is : ${randomNumber}`);
}
singleDigitNumber();

// 2. Random to get Dice Number between 1 to 6
function generatingDiceNumber() {
    let DiceNumber = Math.floor(Math.random() * 6) %2;

}
generatingDiceNumber();

// 3. Adding two dice Numbers
function generatingDiceNumber() {
    let rollDie1 = Math.floor(Math.random() * 6) %2;
    let rollDie2 = Math.floor(Math.random() * 6) %2;
    let die1 = rollDie1
    let die2 = rollDie2
    let add = die1 + die2;
    console.log(`Adding two dices Numbers : ${add}`);
}
generatingDiceNumber();

// 4. 5 Random 2 Digit values of sum and the average
function randomTwodigitNumber(){
    return Math.floor(Math.random() *10) % 90;
}
let number = 0;
let sum = 0;
for (count = 0; count < 5; count++){
    number = randomTwodigitNumber();
    sum += number;
}
let average = sum / count;
console.log(`Five Random 2 Digit values sum is : ${sum}`);
console.log(`Five Random 2 Digit values average is : ${average}`);

//5 Unit Conversion

//5A. 1ft = 12 inch then 42 inch = ? ft
function inchToFeet(Feet) {
    return Feet / 12;
}
let Inch = inchToFeet(42);
console.log("42 inches = " + Inch + " ft");

//5B. Rectangular Plot of 60 feet x 40 feet in meters
function FeettoMeter(input) {
    return input * 0.3048;
}
let length = 60;
let width = 40;
let lengthInMeter = FeetToMeter(length);
let widthInMeter = FeetToMeter(width);
console.log("Area in meters : " + lengthInMeter + " m X " + widthInMeter + " m");

//5C. calculate area of plots in acres
function calculateArea(length, width) {
    return FeetToMeter(length) * FeetToMeter(width);
}

function convertIntoAcres(areaOf25Plots) {
    return areaOf25Plots * 0.000247105;
}
let area = calculateArea(length, width);
let areaOf25Plots = area * 25;
let areaInAcres = convertIntoAcres(areaOf25Plots);
console.log("Area of 25 plotes in acres is " + areaInAcres);