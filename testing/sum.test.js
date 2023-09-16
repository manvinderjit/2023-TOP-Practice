const sum = require('./sum.js');

test('sum positive numbers', () => {
    expect(sum(1,2)).toBe(3);
});

