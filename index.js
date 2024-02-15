/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(stringsArray) {
  let arr =[];
  
  for(let str of stringsArray){ 
    const currentChar = str[0];
    const words = currentChar.toUpperCase();
      if(str.includes(words)){
        arr.push(str);
      }
    }
   return arr;
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
  
  
  for(let i = 0; i < arr.length; i++){

       if (arr[i] > 10 && (arr[i] % 2 === 1)) {
       sum += arr[i];
    

     } 
    console.log(sum)
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
  let countObj= {}
  let newWord = sentence.split(" ");
 for (let key in sentence){
  if (newWord(Object(obj.keys))){
    obj[key] = newWord.Number();
    countObj.push(newWord);
  }
 }
 return countObj;
}

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
