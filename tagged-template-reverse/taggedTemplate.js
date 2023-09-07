// Create an array that separates words and special characters
function splitWordsAndSpecialCharsToArray (_templateLiteral, myRegExp) {
    
    // @_splitWordsAndCharsToArray: stores words and special characters as separate array items
    let _splitWordsAndCharsToArray = [];

    // @subString stores the next word for the array
    let subString = "";
    // Iterate through the characters in the provided template literal
    for (let i = 0; i < _templateLiteral.length; i++) {
        
        // If the character is an alphabet or number
        if(_templateLiteral[i].match(myRegExp)) {

            // Add it to substring
            subString += _templateLiteral[i];    
            
            // If it is the last character in the template literal, push it to the array
            if(i == _templateLiteral.length - 1) {
                _splitWordsAndCharsToArray.push(subString);
            }

        } else {

            // If the character is a special character

            // 1. Add the word substring before the special character to the array
            _splitWordsAndCharsToArray.push(subString);

            // 2. Reset the substring 
            subString = "";

            // 3. Add the special character as the next array item
            _splitWordsAndCharsToArray.push(_templateLiteral[i]);
        }
    }

    return _splitWordsAndCharsToArray;

}


// Reverse only the words in the array and keep the special characters as is
function reverseArrayWords (inputArray, myRegExp) {
    
    for (let  i = 0; i < inputArray.length; i++) {

        // If the array value matches the regex, i.e., is a word and not a special character
        if(inputArray[i].match(myRegExp)) {            

            // Reverse the word
            inputArray[i] = inputArray[i].split("").reverse().join("");
        }
    }

    return inputArray;    
}


// Join the reversed words and special characters to form the reverse template literal
function joinArrayWithReversedWordsAndCharsToString (inputArray) {

      const reversedString = inputArray.join("");
      return reversedString;
}


function customTaggedTemplate (templateLiteral) {
    
    // @@param: The following parameters have been used
    // @myRegExp: matches alphabets and numbers
    // @splitWordsAndCharsToArray: stores the template literal by splitting words and special chars as separate items.
    // @arrayWithReversedWords: reverses the words in @splitWordsAndCharsToArray and keeps special chars as is.
    // @reversedString: joins the items in @arrayWithReversedWords to form the reversed template literal string.

    const myRegExp = new RegExp("[a-zA-Z0-9]+");    
    
    const splitWordsAndCharsToArray = splitWordsAndSpecialCharsToArray(templateLiteral, myRegExp);
    
    const arrayWithReversedWords = reverseArrayWords(splitWordsAndCharsToArray, myRegExp);
        
    const reversedString = joinArrayWithReversedWordsAndCharsToString(arrayWithReversedWords);

    return reversedString;

}

const result = customTaggedTemplate(`Hello, World! This is a tagged template example.`);
console.log(result);