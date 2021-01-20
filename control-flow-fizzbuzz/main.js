// Esercizio FizzBuzz
// % 3 = Fizz
// % 5 = Buzz
// FizzBuzz
// numero fornito

// const fizzBuzz = num => {
//     if ((num % 3 === 0) && (num % 5 === 0)) return 'FizzBuzz';
//     else if (num % 3 === 0) return 'Fizz';
//     else if (num % 5 === 0) return 'Buzz';
//     else return num
// }


//Short!!

const fizzBuzz = num => (num%3?'':'fizz')+(num%5?'':'buzz')||num 

console.log(fizzBuzz(5))