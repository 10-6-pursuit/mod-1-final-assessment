/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */

// function wordsStartingWithCapital(arr) {
//   let capWord, newArr = [];
  
//   for(let x of arr){
//     capWord = x.toUpperCase();

//     for(let y of arr){
//       if(capWord[0] === y[0]){
//         newArr.push(x)
//       }
//     }
//   }
//   return newArr;
// }

//---------- ONE LINER YEYYYY---------

const wordsStartingWithCapital = arr =>  arr.filter(ele => ele[0] === ele[0].toUpperCase())


/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */

// function sumOfOddNumbersGreaterThanTen(arr) {
//   let greaterThan10 = arr.filter(num => num > 10 && num % 2 !== 0);
//   return greaterThan10.reduce((sum, num) => sum + num, 0);
// }

// ------- ONE LINER YEEEYY ---------

const sumOfOddNumbersGreaterThanTen = arr => arr.filter(num => num > 10 && num % 2 !== 0).reduce((sum, num) => sum + num, 0)


/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(str) {
  let obj = {}, arrOfString = str.split(' ');

  if(str.length === 0){
    return {};
  }

  for(let x of arrOfString){
    obj[x] = x.length;
  }

  return obj;
}


module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
