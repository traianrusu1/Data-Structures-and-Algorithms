const palindrome = require("./index");

test('"abccba" is a palindrome', () => {
  expect(palindrome("abccba")).toBeTruthy();
});

test('"abcba" is a palindrome', () => {
  expect(palindrome("abcba")).toBeTruthy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome("aba ")).toBeFalsy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(" aba")).toBeFalsy();
});

test('" aba " is a palindrome', () => {
  expect(palindrome(" aba ")).toBeTruthy();
});

test('"hello" is not a palindrome', () => {
  expect(palindrome("hello")).toBeFalsy();
});

test('"1000000001" is a palindrome', () => {
  expect(palindrome("1000000001")).toBeTruthy();
});

test('"Dog god" is not a palindrome', () => {
  expect(palindrome("Dog god")).toBeFalsy();
});

test('"ALohaahoLA" is a palindrome', () => {
  expect(palindrome("ALohaahoLA")).toBeTruthy();
});
