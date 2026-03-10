function isPalindrome(word) {
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleanWord.split('').reverse().join('');
  return cleanWord === reversed;
}

module.exports = isPalindrome;