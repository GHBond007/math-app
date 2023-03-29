/*
npm init -y
.gitignore, added node_modules
installed jest => npm i jest --save-dev
Goal:
 -write 4 functions that add, subtract, multiply & divide two numbers
*/
const Math = require('./math')

describe('Math', () => {
  describe('#add', () => {
    it('calculates sum of 5 and 6', () => {
     const math = new Math()

     const result = math.add(5,6)
     const value = 11

     expect(result).toBe(value)
    })
})
it('throws and error when non numbers are parameters', () => {
    const math = new Math()

    const result = () => math.add("a", 4)
    const err = new Error("Parameters must be numbers")

    expect(result).toThrow(err)
  })
})

     describe('#multiply', () => {
        it('calculates product of 5 and 6', () => {
         const math = new Math()
    
         const result = math.multiply(5,6)
         const value = 30
    
         expect(result).toBe(value)
    })
  })

  describe('#divide', () => {
    it('calculates quotient of 5 and 6', () => {
     const math = new Math()

     const result = math.divide(5,6)
     const value = 1.2

     expect(result).toBe(value)
})
})
describe('#subtract', () => {
  it('calculates difference between 5 and 6', () => {
   const math = new Math()

   const result = math.subtract(5,6)
   const value = -1

   expect(result).toBe(value)
})
})