function truthCheck(collection, pre) {
    var isTruthy = true;
    for (var i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) {
            isTruthy = false;
        }
    }
    return isTruthy;
}

truthCheck([{
    "single": "yes"
}], "single");
