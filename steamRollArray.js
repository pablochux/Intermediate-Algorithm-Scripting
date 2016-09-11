function steamrollArray(arr) {
    var newArr = [];
    searchInsideArr(arr);

    // Create a new function that recursively search inside the array and when it found a
    // different thing than an array, push it to newArr[]
    function searchInsideArr(arr) {
        // Search inside an array
        if (Array.isArray(arr)) {
            // Se busca por los elementos a ver si sus elementos son arrays
            for (var i = 0; i < arr.length; i++) {
                searchInsideArr(arr[i]);
            }
        } else {
            newArr.push(arr);
        }
    }

    return newArr;
}

// Casos de prueba
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
