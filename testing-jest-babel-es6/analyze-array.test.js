import { analyzeArray } from "./analyze-array.js";

test('returns an object', () => {
    expect(analyzeArray([3, 6, 1, 18])).toEqual({ average: 7, min: 1, max: 18, length: 4 });
});
