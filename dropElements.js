// Drop elements
function dropElements(arr, func) {
    var finalArr = [];
    for (var i = 0; i < arr.length; i++) {
        // Se recorre el array mientras no se encuentre un elemento que no se quiere, en cuanto se
        // encuentr el elemento, se crea un nuevo array apartir de esa posición con los elementos deseados
        if (func(arr[i])) {
            finalArr = arr.slice(i);
            break;
        }
    }
    return finalArr;
}

dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
});
