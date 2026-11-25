
/*
Name: Heart C. Laroya
Section: IV-BSIT 
Activity: N2 - Modular Calculator
Date: November 24, 2026
*/

// Addition
function add(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

// Subtraction
function subtract(numbers) {
    return numbers.slice(1).reduce(
        (result, number) => result - number,
        numbers[0]
    );
}

// Multiplication
function multiply(numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}

// Division
function divide(numbers) {
    if (numbers.slice(1).includes(0)) {
        throw new Error("Cannot divide by zero.");
    }

    return numbers.slice(1).reduce(
        (result, number) => result / number,
        numbers[0]
    );
}

// Average
function average(numbers) {
    if (numbers.length === 0) {
        throw new Error("Please provide at least one number.");
    }

    return add(numbers) / numbers.length;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};
