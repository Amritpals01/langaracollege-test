const isPalindrome = require('./palindrome');

test('madam is a palindrome', () => {
  expect(isPalindrome('madam')).toBe(true);
});

test('racecar is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('hello is not a palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});