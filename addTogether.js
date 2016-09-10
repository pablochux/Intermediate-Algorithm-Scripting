function addTogether() {
    var returned;
    var length = arguments.length;
    if ((length == 1) && (typeof arguments[0] === 'number')) {
        // && (arguments[0] instanceof Number)
        // We only have arguments[]
        var prevNum = arguments[0];
        returned = function(num) {
            var returned2;
            if (typeof num === 'number') {
                returned2 = prevNum + num;
            }
            return returned2;
        };
    } else if (length == 2) {
        if ((typeof arguments[0] === 'number') && (typeof arguments[1] === 'number')) {
            returned = arguments[0] + arguments[1];
        }
    }
    console.log(returned);
    return returned;
}

// addTogether(2, 3);
// addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
// addTogether(2, "3");
// addTogether(2)([3]);
