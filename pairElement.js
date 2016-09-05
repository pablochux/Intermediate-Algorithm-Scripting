function pairElement(str) {
    var pairArr = [];

    /*
     * G must be completed with C
     * C must be completed with G
     * A must be completed with T
     * T must be completed with A
     *
     */
    function completePair() {
        if (str[i] === 'G') {
            pairArr.push(['G', 'C']);
        } else if (str[i] === 'C') {
            pairArr.push(['C', 'G']);
        } else if (str[i] === 'A') {
            pairArr.push(['A', 'T']);
        } else if (str[i] === 'T') {
            pairArr.push(['T', 'A']);
        } else {
            console.log('The pair element is not valid');
        }
    }
    for (var i = 0; i < str.length; i++) {
        completePair(str[i]);
    }
    return pairArr;
}

pairElement("GCG");
pairElement("ATCGA"); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
