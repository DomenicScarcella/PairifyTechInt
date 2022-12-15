const sum = require('./calc');

// 1. Given the user input is empty when calculating the sum then it should return zero.
test("summing with empty user input it should return zero", () => {
    expect(sum()).toEqual(0);
})

// 2. Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
test("summing with one input should return the input", () => {
    expect(sum("3")).toEqual(3);
})

// 3. Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
test("when summing with two numbers it should return the sum", () => {
    expect(sum("2,3")).toEqual(5);
})

// 4. Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
test("when summing more than two numbers it should return the sum", () => {
    expect(sum("1,2,3")).toEqual(6);
})

// 5. Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
test("when input contains newline and comma delimiters it should return the sum", () => {
    expect(sum("1\n2,3")).toEqual(6)
})

// 6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
test("when input contains custom single-character delimiter it should return the sum", () => {
    expect(sum("//;\n12;3")).toEqual(15)
})

// 7. Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
test("when input contains one negative number when calculating the sum then it should throw an exception 'negatives not allowed: x' ", () => {
    expect(sum("-3")).toEqual("negatives not allowed: -3")
})

// 8. Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers).
test("when input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception 'negatives not allowed: x, y, z' ", () => {
    expect(sum("7/nyyy,,-3/fd-2---1")).toEqual("negatives not allowed: -3, -2, -1")
})

// 9. Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
test("when input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001", () => {
    expect(sum("2,,,,/nl1001")).toEqual(2)
})

// 10. Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1**_2_**3” should return 6)
test("when input contains multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers", () => {
    expect(sum("//[***]\n1**_2_**3")).toEqual(6)
})

// 11. Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[\*][%]\n1\*2%3” should return 6)
test("when input contains multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers", () => {
    expect(sum("//[\*][%]\n1\*2%3")).toEqual(6)
})
