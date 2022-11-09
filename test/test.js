var assert = require("assert");

describe('Array and elements in the array', () => {
    it('should return -1 if the indexOf(number) is not found', () => {
        assert.equal([1,3,6,10].indexOf(90), -1)
    });
});

describe("A simple test of numbers", () =>{
    it("should compare two numbers after addition", () => {
        assert.equal((45 + 56),101)
    });
});

describe("A simple failed test", () =>{
    it('Should break the docker build ', () =>{
        assert.equal(80, 80)
    });
});