
/*
Name: Heart C. Laroya
Section: IV-BSIT 
Activity: N2 - Modular Calculator
Date: November 24, 2026
*/

function formatResult(operation, numbers, result) {
    return `${numbers.join(" " + operation + " ")} = ${result}`;
}

module.exports = formatResult;
