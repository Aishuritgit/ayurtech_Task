let numbers = [];

/**
 * Adds a number to the list.
 *
 * @param {number} num - Number received from the request.
 */
function addNumber(num) {
    numbers.push(num);
}

/**
 * Returns the average of all numbers.
 *
 * @returns {number} The average of the numbers.
 */
function getAvg() {
    let total = 0;

    for (let num of numbers) {
        total = total + num;
    }

    return total / numbers.length;
}

/**
 * Clears all numbers.
 * Used to reset the data before tests.
 */
function clearNumbers() {
    numbers = [];
}

module.exports = { addNumber, getAvg , clearNumbers };