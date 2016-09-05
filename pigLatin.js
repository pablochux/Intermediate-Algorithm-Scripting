function isVowel(x) {
    return x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u';
}

function translatePigLatin(str) {
    var newStr = '';
    // If first letter is a vowel -> add way
    if (isVowel(str[0])) {
        newStr = str + 'way';
    } else { // If first letter is a consonant -> add way
        // If first letter is a consonant and second letter is a consonant-> add way
        if (!isVowel(str[1])) {
            newStr = str.slice(2) + str[0] + str[1] + 'ay';
        } else { // Only first letter is a consonant
            newStr = str.slice(1) + str[0] + 'ay';
        }
    }
    return newStr;
}

translatePigLatin("consonant");
