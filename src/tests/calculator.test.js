const { add, subtract, multiply, divide } = require('../calculator');

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
