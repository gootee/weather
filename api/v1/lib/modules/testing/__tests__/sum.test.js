const sumFunction = require('../sum')

test('adds two numbers', () => {
  expect(sumFunction.sum(1,2)).toBe(3)
})