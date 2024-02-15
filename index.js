/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 * 
 * pseudocode
 * create an empty array
 * loop through the stringArray 
 * set up method to look through each element
 * find each element that have a capital letter
 * push the element with capital into the new array
 */

function wordsStartingWithCapital(stringsArray) {
  let newArr = [];

  for (let i = 0; i < stringsArray.length; i++) {
    let currWord = stringsArray[i];
    if (currWord[0].toUpperCase() === currWord[0]) {
      newArr.push(currWord);
    }
  }

  return newArr;
}

/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
function sumOfOddNumbersGreaterThanTen(numbersArray) {
	let sum = 0;
	for (let num of numbersArray) {
		if (num > 10 && num % 2 !== 0) {
			sum += num;
		}
	}
	return sum;
}



/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(sentence) {
  const words = sentence.split(" ");
  const counts = {};
  
  for (let word of words) {
    counts[word] = word.replace(/\s/g, "").length;
  }
  
  return counts;
}



module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
