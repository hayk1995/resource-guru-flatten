import {flattenArray} from '../src/flatten-array';

describe("Test flatten array", () => {

    it("Should flatten simple nested array", () => {
        const nestedArr = [[1, 2], [3, [4, 5]]];
        const expected = [1, 2, 3, 4, 5]
        expect(flattenArray(nestedArr)).toStrictEqual(expected);
    });

    it("Should flatten empty array to empty array", () => {
        expect(flattenArray([])).toStrictEqual([]);
    });

    it("Should flatten nested empty array to empty array", () => {
        expect(flattenArray([[], []])).toStrictEqual([]);
    });

    it("Should flatten deep array", () => {
        const nestedArr = [[[[[[[5]]]]]]];
        const expected = [5];
        expect(flattenArray(nestedArr)).toStrictEqual(expected);
    });

    it("Should flatten array with any type of variables", () => {
        const nestedArr = [["string", [1], [{obj: 1}]]];
        const expected = ["string", 1, {obj: 1}];
        expect(flattenArray(nestedArr)).toStrictEqual(expected);
    });

});