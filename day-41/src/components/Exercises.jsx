export default function Exercises() {

    function findMax(a, b) {
        return Math.max(a, b);
    }
    console.log(findMax(1, 2));


    function findNumberInarray(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) {
                return i;
            }
        }
        return -1
    }

    const a = [1, 2, 4, 5];
    const b = ["a", "b", "c", "d"];
    console.log(findNumberInarray(a, 6)); //-1
    console.log(findNumberInarray(a, 4)); //2
    console.log(findNumberInarray(b, "a"));
    console.log(findNumberInarray(b, "e"));


    function randomNumber(a, b) {
        let max = Math.max(a, b);
        let min = Math.min(a, b);
        const c = Math.floor(Math.random() * (max - min + 1) + min)
        return c;
    }

    console.log(randomNumber(2, 5)) //3


    function findAvargare(arr) {
        let sum = 0;
        arr.map(a => {
            sum += a
        })
        return sum / arr.length;
    }

    console.log(findAvargare(a));


    // //isn't it prime number
    // let primeNum = Number(prompt("Give a prime number 0-100"));

    // function isPrimeNumber(primeNum) {
    //     if (primeNum < 2) {
    //         alert(`${primeNum} is prime number`);
    //     }
    //     for (let i = 2; i <= Math.sqrt(primeNum); i++) {
    //         if (primeNum % i === 0) {
    //             alert(`${primeNum} isn't prime number`);
    //             break;
    //         }
    //     }
    //     alert(`${primeNum} is prime number`);
    // }
    // isPrimeNumber(primeNum);

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 0; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    console.log(isPrime(121));


    function strToLowerCase(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].toUpperCase());
        }
        return arr;
    }
    console.log(strToLowerCase(b));

    return (
        <div>
            <h1>Day-41-exercises</h1>
        </div>
    )
}