import { add, add2 } from './add';

describe(add.name, () => {
    it('should return the sum of two numbers', () => {
        // arrange
        let num1 = 5;
        let num2 = 10;

        // act
        let result = add(num1, num2);

        // assert
        expect(result).toBe(15);
    })
})

describe(add2.name, () => {
    it('should return the sum of an array of numbers', () => {
        // arrange
        const array = [2, 4, 6, 8, 10];

        // act
        const result = add2(...array);

        // assert
        expect(result).toBe(30);
    })
})