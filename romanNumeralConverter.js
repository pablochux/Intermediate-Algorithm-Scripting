var romanNumbers = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
var divisors = [1, 5, 10, 50, 100, 500, 1000];

function convertToRoman(num, divisor) {
    var romanNumber = '';
    var splitNum = splitNumber(num);
    /*
     * addRomanNumbers añade miles, centenas, decenas y unidades en función de los parametros
     *
     *
     *
     */
    function addRomanNumbers(index, char1, char2, char3) {
        if (index === 0) {
            if (splitNum[index] !== 0) {
                // Add thousands to the roman number
                addChar(char1, splitNum[index]);
            }
        } else {
            if (splitNum[index] !== 0) {
                if (splitNum[index] > 4) {
                    // Caso 9
                    if (splitNum[index] === 9) {
                        addChar(char1 + char3, 1);
                    } else {
                        romanNumber += char2;
                        addChar(char1, splitNum[index] - 5);
                    }
                } else if (splitNum[index] === 4) {
                    // Caso 4
                    addChar(char1 + char2, 1);
                } else {
                    // > 4
                    addChar(char1, splitNum[index]);
                }
            }
        }
    }
    /*
     *   addChar adds a char a number of times to romanNumber
     *   romanNumber is not a parameter because we want to update the value to the global variable
     *   thats the reason because addChar is inside convertToRoman
     *
     */
    function addChar(char, times) {
        for (var i = 0; i < times; i++) {
            romanNumber += char;
        }
    }

    // Function body
    addRomanNumbers(0, 'M');
    addRomanNumbers(1, 'C', 'D', 'M');
    addRomanNumbers(2, 'X', 'L', 'C');
    addRomanNumbers(3, 'I', 'V', 'X');
    return romanNumber;
}

function splitNumber(num) {
    // Get the divisor number cleaning the decimal part
    function cleanNumber(divisor) {
        return Math.floor(num / divisor);
    }
    // Divide numner in thousands, hundreds, tens and units
    var arrNumbers = []; // Array that contains the thousands, hundreds, tens and units
    arrNumbers.push(cleanNumber(1000)); // Thousands
    num -= arrNumbers[0] * 1000;
    arrNumbers.push(cleanNumber(100));
    num -= arrNumbers[1] * 100;
    arrNumbers.push(cleanNumber(10));
    num -= arrNumbers[2] * 10;
    arrNumbers.push(cleanNumber(1));
    return arrNumbers;
}

convertToRoman(9);
