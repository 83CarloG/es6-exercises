// calcolo media e classifica con colori

// utente => array

// ClassMedia

// <25 rosso

// <50 giallo

// <75 arancione

// colore verde

const array = [50, 100];
console.log(classColor(array));

function classColor(matrice) {
      media = classMedia(matrice)

    if (media < 25) return 'rosso';
    if (media < 50) return 'giallo';
    if (media < 75) return 'giallo';
    return 'verde';
    
}

function classMedia(matrice) {
     let somma = 0
    for (let valore of matrice) {
        somma += valore
    }

    return somma / matrice.length
}
