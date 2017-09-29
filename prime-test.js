const chai = require('chai');
const assert = chai.assert;
const generatePrime = require('./prime-generator');

describe('Test for prime numbers not between 1 and 100', () => {
  it('should return invalid number for number less than 1', () => {
    assert.deepEqual('Invalid input', generatePrime(-1));
  });
  it('should return invalid number for number greater than 100', () => {
    assert.deepEqual('Number must be between 1 and 100', generatePrime(101));
  });
});

describe('Test for invalid inputs', () => {
  it('should return number expected for a string', () => {
    assert.deepEqual('Invalid input', generatePrime('Andela'));
  });
  it('should return Invalid input for an array', () => {
    assert.deepEqual('Invalid input', generatePrime(['bola']));
  });
  it('should return Invalid input for an object', () => {
    assert.deepEqual('Invalid input', generatePrime({}));
  });
  it('should return Invalid input for an array', () => {
    assert.deepEqual('Invalid input', generatePrime([2,3,5]));
  });
});

describe('Test for valid inputs', () => {
  it('should return an empty array for input of 1', () => {
    assert.deepEqual([], generatePrime(1));
  });
  it('should return [2] for input of 2', () => {
    assert.deepEqual([2], generatePrime(2));
  });
  it('should return an empty array for input of 1', () => {
    assert.deepEqual([], generatePrime(1));
  });
  it('should return [2,3,5] for input of 5', () => {
    assert.deepEqual([2, 3, 5], generatePrime(5));
  });
  it('should return 3 for length of returned array', () => {
    assert.deepEqual(3, generatePrime(5).length);
  });
  it('should return [2,3,5,7,11,13,17,19] for 20', () => {
    assert.deepEqual([2, 3, 5, 7, 11, 13, 17, 19], generatePrime(20));
  });
});
