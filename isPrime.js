// Вывести на экран все простые числа до 30

// 1 выведем "в лоб", но в консоль
console.log('2, 3, 5, 7, 11, 13, 17, 19, 23, 29');

// 2 выведем "в лоб", но всплывашкой
const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
alert(arr);

// 3 алгоритм 'перебор делителей'
let n = 30;
step:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue step;
    }
    console.log(i);
}


// 4 Решето Эратосфена
let getPrimes = (num) => {
    const seive = [];
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (!seive[i]) {
            primes.push(i);
            for (let j = i * i; j <= num; j += i) {
                seive[j] = true;
            }
        }
    }
    return primes;
}
console.log(getPrimes(30));

// 5 
function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function getPrimesFor(num) {
    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(getPrimesFor(30));