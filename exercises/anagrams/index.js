// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let result = true;
    const getOnlyChar = s => {
        return s
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    };

    // I could compare length of two arrays to directely return false when the length are different

    for (let i = 0; getOnlyChar(stringA).length > i; i++) {
        if (getOnlyChar(stringA)[i] !== getOnlyChar(stringB)[i]) {
            result = false;
        }
    }

    return result;
}

module.exports = anagrams;
