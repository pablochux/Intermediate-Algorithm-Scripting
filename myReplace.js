function myReplace(str, before, after) {
    // Replace unequal chars in before and after (uuper-lower case)
    for (var i = 0; i < after.length; i++) {
        // Prevent erros trying to access before[i] when it's not defined
        if (i >= before.length) {
            break;
        }
        // When char is upperCase -> change to upperCase
        if (before[i] == before[i].toUpperCase()) {
            after = after.replace(after[i], after[i].toUpperCase());
        } else {
            // When char is lowerCase -> change to lowerCase
            after = after.replace(after[i], after[i].toLowerCase());
        }
    }
    // Asegurarse que after este en la frase
    if (str.indexOf(before) !== -1) {
        str = str.replace(before, after);
    }
    return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
