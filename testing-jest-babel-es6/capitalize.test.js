import { capitalize } from "./capitalize.js";

test('capitalize first character of string', () => {
    expect(capitalize('hello')).toBe('Hello');
});
