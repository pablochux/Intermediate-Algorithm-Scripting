function searchInsideArr(arr) {
    while (!found && ) {

    }
    return elem;
}

function steamrollArray(arr) {
    // I'm a steamroller, baby
    // Search inside an array
    // Se comprueba que haya un array

    var newArr = [];
    console.log(arr instanceof Array);
    if (arr instanceof Array) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array) {

            } else {
                newArr.push(arr);
            }
        }
    } else {
        newArr.push(arr);
    }
    console.log(newArr);
    return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray(1);
