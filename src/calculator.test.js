const calculator = require('./calculator');


test('calculator function can return some basic arithmetic', () => {
    expect(calculator.add(2, 5)).toBe(7);
    expect(calculator.add(1005, 831)).toBe(1836);
    expect(calculator.add(2.3, 10.2)).toBeCloseTo(12.5);

    expect(calculator.subtract(2, 5)).toBe(-3);
    expect(calculator.subtract(2043, 43)).toBe(2000);
    expect(calculator.subtract(9.6, 3.3)).toBeCloseTo(6.3);

    expect(calculator.multiply(2, 5)).toBe(10);
    expect(calculator.multiply(7, 7)).toBe(49);
    expect(calculator.multiply(2.5, 3)).toBeCloseTo(7.5);

    expect(calculator.divide(9, 3)).toBe(3);
    expect(calculator.divide(30, 6)).toBe(5);
    expect(calculator.divide(10, 3)).toBeCloseTo(3.333);
});