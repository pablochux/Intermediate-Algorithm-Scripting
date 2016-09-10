function binaryAgent(str) {
    // Separate all the binary numbers into an array
    var arr = str.split(' ');
    var finalStr = '';
    for (var i = 0; i < arr.length; i++) {
        // Transform the binary number to a decimal number, and then transform it to a char and concat to the finalStr
        finalStr += String.fromCharCode(parseInt(arr[i], 2));
    }
    return finalStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
binaryAgent('01000001 ');
