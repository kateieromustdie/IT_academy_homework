const { Calculator } = require('./ForTesting')
const { expect } = require('chai')

describe('calculation test', function () {
    it('Should return sum of 2 numbers', () => {
        expect(Calculator.add(5, 7)).to.equal(12)
    })

    it('Should return sum of 6 numbers', () => {
        expect(Calculator.add(1, 1, 1, 1, 1, 1)).to.equal(6)
    })

    it('Should return sum of 2 negative numbers', () => {
        expect(Calculator.add(-5, -7)).to.equal(-12)
    })

    it('Should return sum of 0 and 0', () => {
        expect(Calculator.add(0, 0)).to.equal(0)
    })

    it('Should return sum 0', () => {
        expect(Calculator.add()).to.equal(0)
    })

    it('Should return sum NaN', () => {
        expect(Calculator.add('hi', 6)).to.equal(NaN)
    })

    it('Should return positive multiplication result', () => {
        expect(Calculator.multiply(3, 7)).to.equal(21)
    })

    it('Should return negative multiplication result', () => {
        expect(Calculator.multiply(-3, 7)).to.equal(-21)
    })

    it('Should return 0 if one of the numbers is 0', () => {
        expect(Calculator.multiply(3, 0)).to.equal(0)
    })

    it('Should return Nan if one of the values is not a number', () => {
        expect(Calculator.multiply(3, 'text')).to.equal(0)
    })

    it('Should return division result of 2 numbers', () => {
        expect(Calculator.divide(10, 2)).to.equal(5)
    })

    it('Should return division with remainder', () => {
        expect(Calculator.divide(11, 2)).to.equal(5.5)
    })

    it('Should return 0 if dividend is 0', () => {
        expect(Calculator.divide(0, 2)).to.equal(0)
    })

    it('Should return Null if dividend is 0', () => {
        expect(Calculator.divide(10, 0)).to.equal(NaN)
    })

    it('Should return Null if one of values is not a number', () => {
        expect(Calculator.divide(10, 'dsakv34')).to.equal(NaN)
    })

    it('Should return the subtraction of a 2 numbers', () => {
        expect(Calculator.subtraction(10, 5)).to.equal(5)
    })

    it('Should return the subtraction of a 2 negative numbers', () => {
        expect(Calculator.subtraction(-10, -5)).to.equal(-5)
    })

    it('Should return 0 if subtraction is 0', () => {
        expect(Calculator.subtraction(10, 10)).to.equal(0)
    })
    
    it('Should return negative subtraction if 2 numbers are positive', () => {
        expect(Calculator.subtraction(5, 10)).to.equal(-5)
    })

    it('Should return negative subtraction if one of values is not a number', () => {
        expect(Calculator.subtraction(5, 'jgchv')).to.equal(NaN)
    })

    it('Should return the square of a number', () => {
        expect(Calculator.exponentiation(10)).to.equal(100)
    })

    it('Should return the square of a negative number', () => {
        expect(Calculator.exponentiation(-10)).to.equal(100)
    })

    it('Should return NaN if value is not a number', () => {
        expect(Calculator.exponentiation('Hi')).to.equal(NaN)
    })
})