function validateInput(input) {
    if (typeof input !== "string") input = String(input);
    if (!input.match(/^[1-9][0-9]*$/)) return false;
    let num = Number(input);
    return Number.isInteger(num) && num > 0;
}

function findPrimes(limit) {
    let n = Number(limit);
    if (n < 2) return [];
    let sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }

    }
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (sieve[i]) primes.push(i);
    }
    return primes;
}
function displayPrimes(primes, limit) {
    // Show alert
    if (primes.length === 0) {
        alert(`There are no prime numbers less than or equal to ${limit}.`);
    } else {
        alert(`For n = ${limit} prime numbers are ${primes.join(', ')}`);
    }
}

window.onload = function() {
    let value;
    mainloop: while (true) {
        value = window.prompt("Enter a positive integer number:");
        if (value === null) {
            alert("You pressed cancel. Please reload to try again.");
            return;
        }
        if (validateInput(value)) {
            break mainloop;
        }
        // alert(" enter integer number.");
    }
    let primes = findPrimes(Number(value));

    // เรียกใช้ฟังก์ชัน displayPrimes
    displayPrimes(primes, value);
}