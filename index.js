/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(arr) {
	return arr.filter((ele) => ele[0].match(/[A-Z]/));
}

/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
function sumOfOddNumbersGreaterThanTen(nums) {
	return nums.reduce((acc, curr) => {
		if (curr % 2 !== 0 && curr > 10) {
			acc += curr;
		}
		return acc;
	}, 0);
}

/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(words) {
	const count = {};
  const arrWords = words.split(" ");
  
  if (words.length === 0) return {}
  
	for (let i = 0; i < arrWords.length; i++) {
		count[arrWords[i]] = arrWords[i].length;
	}

	return count;
	
}
countLettersInEachWord("The quick brown fox");

module.exports = {
	wordsStartingWithCapital,
	sumOfOddNumbersGreaterThanTen,
	countLettersInEachWord,
};
