const shiftCharacter = (character, shiftFactor) => {
    'use strict';
    let charCode = character.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90 && (charCode + shiftFactor) > 90) {
        return (String.fromCharCode(65 + shiftFactor - 1));
    } else if (charCode >= 65 && charCode <= 90 && (charCode + shiftFactor) < 65)  {
        return (String.fromCharCode(90 + shiftFactor + 1));
    } else if (charCode >= 97 && charCode <= 122 && (charCode + shiftFactor) > 122) {
        return (String.fromCharCode(97 + shiftFactor - 1));
    } else if (charCode >= 97 && charCode <= 122 && (charCode + shiftFactor) < 97) {
        return (String.fromCharCode(122 + shiftFactor + 1));
    } else {
        return (String.fromCharCode(charCode + shiftFactor));
    }    
}

const createCipheredString = (inputString, shiftFactor) => {
    const checkRegEx = new RegExp('[a-zA-Z]');
    let cipheredString = "";
    for(let char of inputString) {
        let nextChar;
        if ((checkRegEx).test(char)) {
            nextChar = shiftCharacter (char, shiftFactor);
        } else {
            nextChar = char;
        }
        cipheredString += nextChar;
    }
    return cipheredString;
}

const caesarCipher = (inputString, shiftFactor) => {
    'use strict';
    return createCipheredString (inputString, shiftFactor);
};

export { caesarCipher };
