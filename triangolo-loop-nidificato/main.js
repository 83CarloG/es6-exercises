// triangolo - loop - nidificato

function triangolo(numLimite) {
    for (let i = 0; i < numLimite; i++){
        let stringa = '';
            
            for (let j = 0; j <= i; j++)
            stringa += '*';
            console.log(stringa);
    }
}

triangolo(10);