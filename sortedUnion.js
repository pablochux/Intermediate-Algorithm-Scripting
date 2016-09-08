// Check if an element is in an array
function isInArr(arr, value) {
    var found = false;
    var i = 0;
    while ((!found) && (i < arr.length)) {
        found = (arr[i] === value);
        if (!found) {
            i++;
        }
    }
    return found;
}

function uniteUnique(arr) {
    var finalArr = [];
    // Se itera por los argumentos que se han pasado (los argumentos son 2 o más arrays)
    for (var i = 0; i < arguments.length; i++) {
        if (i === 0) {
            // Add the whole first array (because it's going to be the one to compare with)
            finalArr = finalArr.concat(arguments[i]);
        } else {
            for (var j = 0; j < arguments[i].length; j++) {
                // check if is in finalArray and push it if not
                if (!isInArr(finalArr, arguments[i][j])) {
                    finalArr.push(arguments[i][j]);
                }
            }
        }
    }
    return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
