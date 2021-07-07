const fizzBuzzFunc = () => {
  for (let i = 1; i <= 100; i++) {
    let divisibleByThree = i % 3 == 0;
    let divisibleByFive = i % 5 == 0;

    if (!divisibleByFive && !divisibleByThree) {
      console.log(i);
    } else if (divisibleByFive && divisibleByThree) {
      console.log('FizzBuzz');
    } else if (divisibleByThree) {
      console.log('Fizz');
    } else {
      console.log('Buzz');
    }
  };
};

const jsonFizzBuzz = () => {
  let arr = [];

  for (let i = 1; i <= 100; i++) {
    let divisibleByThree = i % 3 == 0;
    let divisibleByFive = i % 5 == 0;

    if (!divisibleByFive && !divisibleByThree) {
      arr.push(i);
    } else if (divisibleByFive && divisibleByThree) {
      arr.push('FizzBuzz');
    } else if (divisibleByThree) {
      arr.push('Fizz');
    } else {
      arr.push('Buzz');
    }
  };

  return arr;
}

exports.fizzBuzz = fizzBuzzFunc;
exports.jsonFizzBuzz = jsonFizzBuzz;
