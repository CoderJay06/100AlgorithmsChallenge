import { allLongestStrings } from "./allLongestStrings";

describe(allLongestStrings.name, () => {
    it('returns array of longest strings', () => {
        // arrange
        const array = ["aba", "aa", "ad", "vcd", "aba"];

        // act
        const result = allLongestStrings(array);

        // assert
        expect(result).toEqual(["aba", "vcd", "aba"]);
    });
});