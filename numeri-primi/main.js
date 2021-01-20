// numero primo:
// > 1,
// divisibile per 1 e per se stesso

// obiettivo: dato un numero restituire l'array  dei numeri primi che lo precedono

const num = 5;

const primi = num => {
    if (num <= 1) return console.log('il numero inserito non è un numero valido');
    if (typeof num !== 'number') console.log('il valore inserito non è un numero');
    
    let arPrimeNumb = [];

    for (let i = 2; i <= num; i++)  
        if (primeNumber(i)) arPrimeNumb.push(i);
    
    return arPrimeNumb;
}

// Funzione che stabilisce se è un numero primo

function primeNumber(num) {
        for (let j = 2; j < num; j++) 
            if (num % j === 0) {
                return false;
            }
    return true;
}


console.log(primi(10))