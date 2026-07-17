const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator basic operations (from image examples)', () => {
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Extended operations (modulo, power, square root)', () => {
  test('modulo: 5 % 2 = 1 (image example)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('power: 2 ^ 3 = 8 (image example using exponent)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('squareRoot: sqrt(16) = 4 (image example)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('modulo with numeric strings', () => {
    expect(modulo('10', '3')).toBe(1);
  });

  test('power with numeric strings', () => {
    expect(power('2', '8')).toBe(256);
  });

  test('squareRoot with numeric string', () => {
    expect(squareRoot('9')).toBe(3);
  });
});

describe('Extended operations edge cases and validation', () => {
  test('modulo by zero throws', () => {
    expect(() => modulo(1, 0)).toThrow(/modulo by zero/);
  });

  test('power with negative exponent', () => {
    expect(power(2, -3)).toBeCloseTo(0.125);
  });

  test('power invalid inputs throw TypeError', () => {
    expect(() => power('a', 2)).toThrow(TypeError);
  });

  test('squareRoot of negative number throws', () => {
    expect(() => squareRoot(-4)).toThrow(/negative input/);
  });

  test('squareRoot invalid input throws TypeError', () => {
    expect(() => squareRoot({})).toThrow(TypeError);
  });
});

describe('Calculator edge cases and input validation', () => {
  test('addition with numeric strings', () => {
    expect(add('2', '3')).toBe(5);
  });

  test('subtraction with mixed numeric input', () => {
    expect(subtract('10', 4)).toBe(6);
  });

  test('multiplication with floating point', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test('division with floating point result', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow(/division by zero/);
  });

  test('invalid inputs throw TypeError for add', () => {
    expect(() => add('a', 2)).toThrow(TypeError);
  });

  test('invalid inputs throw TypeError for subtract', () => {
    expect(() => subtract({}, [])).toThrow(TypeError);
  });

  test('invalid inputs throw TypeError for multiply', () => {
    expect(() => multiply(null, undefined)).toThrow(TypeError);
  });

  test('invalid inputs throw TypeError for divide', () => {
    expect(() => divide('not', 'num')).toThrow(TypeError);
  });
});
