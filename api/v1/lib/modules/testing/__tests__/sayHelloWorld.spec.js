const sayHelloWorld = require('../sayHelloWorld')
const letter = require('../letterCount')

describe('hello world test suite', () => {
  it('check if sayHelloWorld is function',() => {
    expect(typeof sayHelloWorld.sayHelloWorld).toBe('function')
  })
  it('returns a string Hello World',() => {
    expect(sayHelloWorld.sayHelloWorld()).toBe("Hello World")
  })
})

describe('test suite for letterCount function', () => {
  it('is letterCount a function', () => {
    expect(typeof letter.letterCount).toEqual('function')
  })
  
  it('returns the correct count of given character in a string', () => {
    let result = letter.letterCount('l','silent')
    expect(result).toEqual(1)
  })

  it('returns undefined if given character is not in string', () => {
    let result = letter.letterCount('p','silent')
    expect(result).toBeUndefined()
  })
})