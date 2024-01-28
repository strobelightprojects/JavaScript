//I changed my plan to do the concurrency converter but after looking for a libary I decided to just break up the requirments into sepeate parts

// fulfill the first requiremnt of displaying something to the screen
//this is just basic multiplication didn't find a library I liked to pull exchange rates 
const multiply = (number1, number2) => number1 * number2; //The multiplcation when converting currency

const multiplyNumbers = () => {
    let num1 = parseFloat(document.querySelector('#num1').value);     // Setting the value in Html
    let num2 = parseFloat(document.querySelector('#num2').value);
    let result = multiply(num1, num2);
    document.querySelector('#product').value = result;
}
document.querySelector('#exchange').addEventListener('click', multiplyNumbers); //gives functionality to the button

//Recursion 
const factorial = (n) => {      //factorial calculations using recursion
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

document.querySelector('#factorialButton').addEventListener('click', () => {  //gives functionality to the button
    let number = parseFloat(document.querySelector('#number').value);// Setting the value in Html
    let result = factorial(number);
    document.querySelector('#factorialResult').textContent = `Factorial of ${number}: ${result}`;
});

//Native Array ES6 Functions
const arrayOperations = () => {
    const numbers = [1, 2, 3, 4, 5];

    // Map
    let mappedArray = numbers.map(num => num * 2); // performing the map operation
    document.querySelector('#mappedArray').textContent = `Mapped Array: ${mappedArray}`; // Setting the value in Html

    // Filter
    let filteredArray = numbers.filter(num => num % 2 === 0); // performing the filter operation
    document.querySelector('#filteredArray').textContent = `Filtered Array: ${filteredArray}`;// Setting the value in Html

    // Reduce
    let sum = numbers.reduce((acc, curr) => acc + curr, 0); //perfroming the Reduce operation
    document.querySelector('#sum').textContent = `Sum of Array: ${sum}`;// Setting the value in Html
}

document.querySelector('#arrayButton').addEventListener('click', arrayOperations);//gives functionality to the button

//Javascript library requirement using JQuerey and CSS Dom streach challenge
var exchange = $("#ex");
exchange.css({ color: "blue" });




