import { caesarCipher } from "./caesar-cipher.js";

test('only alphabets', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});
test('only symbols', () => {
    expect(caesarCipher('!', 3)).toBe('!');
});
test('upper and lower case', () => {
    expect(caesarCipher('AbC', 2)).toBe('CdE');
});
test('alphabet and symbol', () => {
    expect(caesarCipher('Ab!C', 2)).toBe('Cd!E');
});
test('alphabet wrapping', () => {
    expect(caesarCipher('AZ!zf', 3)).toBe('DC!ci');
});
test('empty string', () => {
    expect(caesarCipher('', 3)).toBe('');
});
test('no shifting', () => {
    expect(caesarCipher('AZ!zf', 0)).toBe('AZ!zf');
});
test('negative shifting', () => {
    expect(caesarCipher('AZ!azf', -2)).toBe('YX!yxd');
});
