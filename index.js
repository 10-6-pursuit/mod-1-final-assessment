/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(stringsArray) {
  let result = []

    for(let word of stringsArray) {
      if (/^[A-Z]/.test(word)) {
        result.push(word)
      }
    }

    return result;
  }

 

/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
// create an array to hold all numbers greater than 10
// itterate over numbersArray
//calculate the numbers greater than 10
//return result
function sumOfOddNumbersGreaterThanTen(numbersArray) {
  let sum = 0
    for ( let num of numbersArray ) {
        if (num % 2 !== 0 && num > 10) {
          sum += num
        }
    }
    return sum 
}

/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 *  
 * create a obj to store count 
 * 
 * 
 */




function countLettersInEachWord(sentence) {
  let result = {}

  for (let word of sentence) {
   
  }  
  return result
}

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
