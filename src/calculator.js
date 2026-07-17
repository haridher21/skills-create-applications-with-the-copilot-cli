// calculator.js
// Supported operations: Addition, Subtraction, Multiplication, Division
// This module exports four functions that perform the basic arithmetic operations.

/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    throw new TypeError('add: both arguments must be numbers');
  }
  return x + y;
}

/**
 * Subtract b from a
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    throw new TypeError('subtract: both arguments must be numbers');
  }
  return x - y;
}

/**
 * Multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    throw new TypeError('multiply: both arguments must be numbers');
  }
  return x * y;
}

/**
 * Divide a by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    throw new TypeError('divide: both arguments must be numbers');
  }
  if (y === 0) {
    throw new Error('divide: division by zero');
  }
  return x / y;
}

module.exports = { add, subtract, multiply, divide };
