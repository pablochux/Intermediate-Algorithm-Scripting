function whatIsInAName(collection, source) {
    // Compare if the object1 has some property equal to object2
    function isInSource(object1, object2) {
        var equals = false;
        // Because the object properties are unknown, we set the properties to the first two keys
        var firstProperty = Object.keys(object1)[0],
            secondProperty = Object.keys(object1)[1];

        // El objecto con el que vamos a comparar es Object1, que es el objeto que habrá que meter en arr en caso de que este en Source
        if (object1.hasOwnProperty(firstProperty)) {
            if (object1.hasOwnProperty(secondProperty)) {
                // Si el objeto1 tiene las dos propiedades, se comprueba que las tenga el objeto2
                if (object2.hasOwnProperty(firstProperty) && object2.hasOwnProperty(secondProperty)) {
                    // Se comprueba que todas las propiedades sean iguales
                    equals = ((object1[firstProperty] === object2[firstProperty]) && (object1[secondProperty] === object2[secondProperty]));
                }
            } else {
                // Si objeto1 solo tiene una propiedad -> se comprueba si son iguales
                if (object2.hasOwnProperty(firstProperty)) {
                    equals = (object1[firstProperty] === object2[firstProperty]);
                }
            }
        } else {
            // Si objeto 1 no tiene la primera propiedad, se comprueba si tiene la segunda y si el objeto2 la tiene
            if ((object1.hasOwnProperty(secondProperty)) && (object2.hasOwnProperty(secondProperty))) {
                // Se comprueba si son iguales
                equals = (object1[secondProperty] === object2[secondProperty]);
            }
        }
        // Se devuelve el resutlado de si son iguales los objetos
        return equals;
    }

    // Main function body
    var arr = [];
    // Iterate through collection
    for (var i = 0; i < collection.length; i++) {
        if (isInSource(source, collection[i])) {
            arr.push(collection[i]);
        }
    }
    return arr;
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});
