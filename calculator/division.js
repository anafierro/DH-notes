function division(a,b){
    if (a === 0 || b === 0) {
        return 'No se puede dividir entre 0';
    } else {
        return a / b;
    }
}

module.exports = division