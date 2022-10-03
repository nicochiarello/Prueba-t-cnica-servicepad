/* 
1. In mathematics, the Fibonacci sequence or serie is the following infinite sequence of natural numbers: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 ...
where f (0) = 0, f (1) = 1 and f (n) = f (n-1) + f (n-2).
Code a program (in javascript or typescript) that solves for any number in the fibonacci series.
*/

export const fibonacci = (n) => {
  if (n < 2) return n;

  const memoryObj = {};

  if (!memoryObj[n]) {
    memoryObj[n] = fibonacci(n - 2) + fibonacci(n - 1);
  }

  return memoryObj[n];
};

/*
2. Given a given input text, Code a program (in javascript or typescript) that displays the number of repetitions of each word.
Sample text: "Hi how are things? How are you?Are you a developer? I
am also a developer"
*/

export const wordRepetitions = (string) => {
  const words = string.toLowerCase().split(/\W/g);
  const result = words.reduce((acc, item) => {
    if (item === "") {
      return acc;
    }
    if (acc[item]) {
      return { ...acc, [item]: acc[item] + 1 };
    }
    return { ...acc, [item]: 1 };
  }, {});
  return result;
};

/*
3. Code a program (in javascript or typescript) that displays the numbers from 1 to 100 on the screen, substituting the multiples of 3 for the word "fizz", the multiples of 5 for "buzz" and the multiples of both, that is, the multiples of 3 and 5, by the word "fizz buzz".
*/

export const fizzBuzz = (num) => {
  const aux = {};
  for (let i = 0; i < 100; i++) {
    let fizz = i % 3 === 0;
    let buzz = i % 5 === 0;
    fizz
      ? buzz
        ? (aux[i] = "Fizz Buzz")
        : (aux[i] = "Fizz")
      : buzz
      ? (aux[i] = "Buzz")
      : "";
  }
  if(num){
    return aux[num]
  }
  return aux
};

