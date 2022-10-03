import { fibonacci, fizzBuzz, wordRepetitions } from "./exercises";

test("fibonnacci sequence", () => {
  expect(fibonacci(3)).toBe(2);
  expect(fibonacci(6)).toBe(8);
  expect(fibonacci(11)).toBe(89);
});

test("Words counter", () => {
  expect(
    wordRepetitions(
      "Hi how are things? How are you?Are you a developer? I am also a developer"
    )
  ).toEqual({
    hi: 1,
    how: 2,
    are: 3,
    things: 1,
    you: 2,
    a: 2,
    developer: 2,
    i: 1,
    am: 1,
    also: 1,
  });
});


test("Fizz buzz", () => {
    expect(fizzBuzz(15)).toBe("Fizz Buzz")
    expect(fizzBuzz(85)).toBe("Buzz")
    expect(fizzBuzz(81)).toBe("Fizz")
})