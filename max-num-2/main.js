// Funzione che restituisce il numero più altro tra due numeri


//* Function Expression

// function max2num (num1, num2) {
//     if num1 > num2 return num1;
//     return num2;
// }

// const numAlto = max2num(4, 5);

// console.log(numAlto);


//* Function expression with Arrow Function

// const max2num = (num1, num2) => {
//     if (num1 > num2) return num1;
//     return num2;
// }  

// console.log(max2num(5, 20))

//* Function expression with Arrow Function and ternary operator

const max2num = (num1, num2) => (num1 > num2)
    ? `il numero alto è ${num1}`
    : `il numero alto è ${num2}`;

console.log(max2num(45, 55))