function smallestCommons(arr) {
    var found = false;
    // Check what is the max
    var max, min;
    if (arr[0] < arr[1]) {
        max = arr[1];
        min = arr[0];
    } else {
        max = arr[0];
        min = arr[1];
    }

    var i = 0;
    while (!found) {
        i++;
        for (var j = min; j <= max; j++) {
            found = (i % j === 0);
            // If the number it's not divisible, search for the next
            if (!found) {
                break;
            }
        }
    }
    console.log(i);
    return i;
}


// smallestCommons([1, 5]);
smallestCommons([23, 18]);
// console.log(6056820);
