const fib = require('.');

describe("fib tests", () => {
  it("should throw a type error for parameter other than integer", () => {
    expect( () => { fib(1.2) }).toThrow(TypeError);
  });

  it("should throw a type error when parameter is less than 1", () => {
    expect( () => { fib(0) }).toThrow(RangeError);
  });

  it("should return an array", () => {
    expect(Array.isArray(fib(5))).toBeTruthy();
  });

  it("should return [0] when parameter is 1", () => {
    expect(fib(1)).toEqual([0])
  });

  it("should return [0, 1] when parameter is 2", () => {
    expect(fib(2)).toEqual([0, 1])
  });

  it("should return [0, 1, 1] when parameter is 3", () => {
    expect(fib(3)).toEqual([0, 1, 1])
  });

  it("should return [0, 1, 1, 2] when parameter is 4", () => {
    expect(fib(4)).toEqual([0, 1, 1, 2])
  });

  it("should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] when parameter is 10 ", () => {
    expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  });
});
