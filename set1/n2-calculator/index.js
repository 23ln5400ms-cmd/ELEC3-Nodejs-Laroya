
/*
Name: Heart C. Laroya
Section: IV-BSIT 
Activity: N2 - Modular Calculator
Date: November 24, 2026
*/

const operations = require("./operations");
const formatResult = require("./formatter");

const os = require("os");

const operation = process.argv[2];
const numbers = process.argv.slice(3).map(Number);

console.log("================================");
console.log("       MODULAR CALCULATOR");
console.log("================================");

console.log("Operating System:", os.platform());

if (!operation || numbers.length === 0) {
    console.log("Error: Please provide an operation and numbers.");
    process.exit(1);
}

if (numbers.some(number => !Number.isFinite(number))) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

try {
    let result;

    switch (operation.toLowerCase()) {
        case "add":
            result = operations.add(numbers);
            break;

        case "subtract":
            result = operations.subtract(numbers);
            break;

        case "multiply":
            result = operations.multiply(numbers);
            break;

        case "divide":
            result = operations.divide(numbers);
            break;

        case "average":
            result = operations.average(numbers);
            break;

        default:
            throw new Error("Unknown operation. Please use add, subtract, multiply, divide, or average.");
    }


    console.log(formatResult(operation, numbers, result));

} catch (error) {
    console.log("Error:", error.message);
}

console.log("================================");
