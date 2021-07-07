const methods = require('./FizzBuzz');

expect.extend({
  toBeStringOrNumber(received) {
    const pass = received.every(i => {
      return typeof(i) == 'string' || typeof(i) == 'number';
    });
    if (pass) {
      return {
        message: () => {
          return `expected ${received} to be string or number`;
        },
        pass: true,
      }; 
    } else {
      return {
        message: () => {
          return `expected ${received} to be string or number`;
        }, 
        pass: false,
      };
    };
  },
});

test('Value at index 0 to equal 1', () => {
  expect(methods.jsonFizzBuzz()[0]).toBe(1);
});

test('Every value returned to be a string or a number', () => {
  expect(methods.jsonFizzBuzz()).toBeStringOrNumber();
})