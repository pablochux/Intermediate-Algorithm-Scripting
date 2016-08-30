// Sum All Numbers in a Range
function sumAll(arr) {
    var counter = 0,
        min = Math.min(arr[0], arr[1]),
        max = Math.max(arr[0], arr[1]);

    for (var i = min; i <= max; i++) {
        counter += i;
    }

    return counter;
}

// Test
sumAll([1, 4]);
