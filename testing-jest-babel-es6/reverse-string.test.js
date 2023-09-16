import { reverseString } from "./reverse-string.js";

test('reverse the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
});
