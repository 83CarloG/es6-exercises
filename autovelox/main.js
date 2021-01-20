// Sappiamo che:
// Limite velocità <= 70km/h
// ogni 5km/h oltre al limite detrazione 1 punto patente
// se punti sottratti > 12 punti, ritiro patente

const autovelox = vel => {
    if (typeof vel !== 'number') return 'non è un numero';
    
    const limitVelox = 70;
    const pointKm = 5;
    const point = Math.floor((vel - limitVelox) / pointKm);
    
    // if (point >= 12) return `ritiro patente, punti sottratti: ${point}`;
    // if (point < 12 && point > 0) return `punti sottratti: ${point}`;
    // return `stai guidando nei limiti`;

    if (point >= 12) return `ritiro patente, punti sottratti: ${point}`
    else return ((point < 12 && point > 0) ? `punti sottratti: ${point}` : `stai guidando nei limiti`)
}

console.log(autovelox(80))