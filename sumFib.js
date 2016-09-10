// Fibonacci numbers
// 1, 1, 2, 3, 5, 8
// The fibonacci is the sum of the previous two numbers

function sumFibs(num) {
    var fib = 1,
        previousFib = 1,
        counter = 1; // Counter already has added the first 1

    while (fib <= num) {
        // First add to counter, then increment the Fibonnaci number, becasue if the fibonacci number
        // is incremented and then added to counter, it cane be > than num
        if (fib % 2 === 1) {
            counter += fib;
        }
        // Incrementar números fibonacci
        fib += previousFib;
        previousFib = fib - previousFib;
    }
    return counter;
}

sumFibs(1000);
