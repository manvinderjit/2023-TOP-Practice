import { reverseString, calculator } from './index.js';

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('calculator add', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('calculator subtract', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
});

test('calculator divide', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test('calculator multiply', () => {
    expect(calculator.multiply(6, 3)).toBe(18);
});