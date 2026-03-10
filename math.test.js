//having .test.js extension is important for jest to recognize it as a test file
//The operation should return the sum of two numbers
const { addition } = require('./addition'); 

test('2+3=5',()=>{
    expect(addition(2,3)).toBe(5);
})

test('10+70=80',()=>{
    expect(addition(10,70)).toBe(80);
});

test.skip('10+70=80',()=>{
    expect(addition(10,70)).toBe(80);
});