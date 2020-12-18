// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverseStr = '';

  for (character of str) {
    reverseStr = character + reverseStr;
  }
  return reverseStr;
}

reverse("abcde");

module.exports = reverse;


/* 
  First answer
  return str.split('').reverse().join('');
*/

/*
  Answer without reverse helper
  let reverseStr = '';

  for (character of str) {
    reverseStr = character + reverseStr;
  }

  return reverseStr;
*/

/* Answer with ES6
return str.split('').reduce((rev, char) => {
  return rev = char + rev;
}, '');
*/