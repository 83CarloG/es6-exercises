// Boolean veri

//Valori convertiti automaticamente in boolean true or false

// False

// false
// Nan
// ''
// 0
// null
// undefined

function veri(arryNum) {
    ar = [];
    for (let valore of arryNum) {
        if (!valore) (ar.push(valore))           
    }
    return console.log(ar);
}

const arry = [12, 3, 'ciao', null, undefined, false, 0, true];

veri(arry);