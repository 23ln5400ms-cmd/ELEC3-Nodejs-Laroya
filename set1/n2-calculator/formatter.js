
/*
Name: Heart C. Laroya
Section: IV-BSIT B
Activity: N2 - Modular Calculator
Date: November 24, 2026
*/

function formatResult(operation, numbers, result) {
    if (operation.toLowerCase() === "average") {
        return `Average of ${numbers.join(", ")} = ${result}`;
    }

    return `${numbers.join(" " + operation + " ")} = ${result}`;
}

module.exports = formatResult;