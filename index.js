/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * 
 * 
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(arr) {
  // let answer = [];
  // for(let word of arr){
  //   //need to compare if the first letter of each word is Uppercase
  //   if( word[0] === arr.toUpperCase) {
  //     answer.push(word.toUpperCase)
  //   }
  // }
  // return answer;

  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if(word[0] === word[0].toUpperCase()) {
      answer.push(word)
    }
  }
  return answer
}

/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
function sumOfOddNumbersGreaterThanTen(arr) {
  let sum = 0;
  for( let num of arr) {
    if (num > 10 && num % 2 !== 0) {
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
 */

function countLettersInEachWord(str) {
  if (!str){
    return {}
  }
  let answer = {}
  let words = str.split(' ')
  for(let word of words){
    answer[word] = word.length
  }
  return answer
}

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
