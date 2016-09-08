function isUpperCase(str) {
    return str === str.toUpperCase();
}

function spinalCase(str) {
    var newStr = str;
    // Found upper case letters preceded by a lower case letter and add a space between them
    newStr = newStr.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Search and replace spaces with -
    newStr = newStr.replace(/[\s]/g, '-');
    // Search and replace _ with -
    newStr = newStr.replace(/_/g, '-');
    // Lower case all string
    newStr = newStr.toLowerCase();
    return newStr;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap"); //"this-is-spinal-tap"
