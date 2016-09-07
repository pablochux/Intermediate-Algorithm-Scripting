// First lower case letter -> 97 (a)
// Last lower case letter -> 122 (z)

/*
 *   Se hace un bucle desde el charCode de la primera letra del string hasta el charCode de la última
 *   Este bucle es una parte del abecedario, por lo que incluye todos los caracteres.
 *   Si algún caracter del bucle no está en el string, es el caracter que nos falta
 *   Si no falta ningún caracter, se devuelve undefined
 */
function fearNotLetter(str) {
    var missingChar;
    for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
        var char = String.fromCharCode(i);
        if (str.indexOf(char) === -1) {
            missingChar = char;
            break;
        }
    }
    return missingChar;
}

// Caso de prueba
fearNotLetter("abce");
