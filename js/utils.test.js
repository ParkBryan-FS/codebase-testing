const {
    sumOfArray,
    findMax,
    purgeDuplicates,
    countVowels
} = require(`./utils`); 

describe("sumOfArray", () => {
    test("sums positive numbers", () => {
        expect(sumOfArray([1, 2, 3, 4])).toBe(10);
    });
    test("sums with negative numbers", () => {
        expect(sumOfArray([-5, 5])).toBe(0);
    });
    test("returns 0 for empty array", () => {
        expect(sumOfArray([])).toBe(0);
    });
});

describe("findMax", () => {
    test("finds maximum in array", () => {
        expect(findMax([1, 5, 3, 9, 2])).toBe(9);
    });
    test("handles all negative numbers", () => {
        expect(findMax([-10, -5, -1])).toBe(-1);
    });
    test("returns undefined for empty array", () => {
        expect(findMax([])).toBeUndefined();
    });
});

describe("purgeofDuplicates", () => {
    test("removes duplicates from number array", () => {
        expect(purgeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });
    test("removes duplicates from string array", () => {
        expect(purgeDuplicates(['a', 'b', 'a'])).toEqual(['a', 'b']);
    });
});

describe("countVowels", () => {
    test("counts vowels in lowercase", () => {
        expect(countVowels("hello")).toBe(2);
    });
    test("counts uppercase vowels", () => {
        expect(countVowels("AEIOU")).toBe(5);
    });
    test("returns 0 for no vowels", () => {
        expect(countVowels("xyz")).toBe(0);
    });
});





