// Sum prime numbers
function sumPrimes(num) {
    // Un número es primo si solo tiene dos divisores
    var counter = 0;
    // Se empieza en dos y se termina en el número que han pasado como parametro (que puede ser primo y se tendría que añadir)
    for (var i = 2; i <= num; i++) {
        if (checkIfPrime(i)) {
            counter += i;
        }
    }
    return counter;
}

function checkIfPrime(num) {
    var isPrime = true;
    // Al empezar en 2 y ser < num nunca llegará a num (por lo tanto, si hay algún divisor más, ya no es primo)
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

// Casos de prueba
sumPrimes(10);
sumPrimes(977);
