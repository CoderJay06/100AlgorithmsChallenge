export function allLongestStrings(inputArray: string[]): string[] {
    // traverse array and find longest strings, store them in array
    let longest = inputArray[0];
    const longestStrings: string[] = inputArray.filter(str => str.length >= longest.length);
    return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));