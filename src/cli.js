#!/usr/bin/env node
// cli.js
// CLI Calculator
// Supported operations: + (Addition), - (Subtraction), * (Multiplication), / (Division)

const readline = require('readline');
const { add, subtract, multiply, divide } = require('./calculator');

function performOperator(op, a, b) {
  switch (op) {
    case '+':
    case 'add':
      return add(a, b);
    case '-':
    case 'sub':
    case 'subtract':
      return subtract(a, b);
    case '*':
    case 'x':
    case 'mul':
    case 'multiply':
      return multiply(a, b);
    case '/':
    case 'div':
    case 'divide':
      return divide(a, b);
    default:
      throw new Error('Unsupported operator: ' + op);
  }
}

function printUsage() {
  console.log('Usage: node src/cli.js <number> <operator> <number>');
  console.log('  Operators: +  -  *  /');
  console.log('Examples:');
  console.log('  node src/cli.js 4 + 2');
  console.log('  node src/cli.js add 4 2');
}

function tryCompute(a, op, b) {
  try {
    const res = performOperator(op, a, b);
    console.log(res);
  } catch (err) {
    console.error('Error:', err.message);
    process.exitCode = 2;
  }
}

const args = process.argv.slice(2);

if (args.length === 0) {
  // Interactive mode
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: 'expr> ' });
  console.log('Node.js CLI Calculator (supports +, -, *, /). Type "exit" or Ctrl+C to quit.');
  rl.prompt();
  rl.on('line', (line) => {
    const input = line.trim();
    if (input === '' ) { rl.prompt(); return; }
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
      rl.close();
      return;
    }
    if (input.toLowerCase() === 'c' || input.toLowerCase() === 'clear') {
      console.clear();
      rl.prompt();
      return;
    }
    // parse expressions like: 2 + 3
    const m = input.match(/^\s*([+-]?\d+(?:\.\d+)?)\s*([+\-*/])\s*([+-]?\d+(?:\.\d+)?)\s*$/);
    if (m) {
      tryCompute(m[1], m[2], m[3]);
    } else {
      console.log('Invalid expression. Expected format: 2 + 3');
    }
    rl.prompt();
  });
  rl.on('close', () => {
    console.log('\nGoodbye');
    process.exit(0);
  });
} else if (args.length === 3 && ['+','-','*','/','add','sub','mul','div','multiply','subtract','divide','x'].includes(args[1]) ) {
  // format: 4 + 2
  tryCompute(args[0], args[1], args[2]);
} else if (args.length === 3 && ['add','sub','mul','div','multiply','subtract','divide'].includes(args[0])) {
  // format: add 4 2
  tryCompute(args[1], args[0], args[2]);
} else {
  printUsage();
  process.exitCode = 1;
}
