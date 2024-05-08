

function calcularSecuencia(semilla) {
    let secuencia = semilla + '\n';
    let mayor = semilla;

    while (semilla !== 1) {
        if ((semilla * 3 + 1) > mayor) {
            mayor = semilla * 3 + 1;
        }
        secuencia += semilla + '\n';
        semilla = semilla % 2 === 0 ? semilla / 2 : semilla * 3 + 1;
    }

    secuencia += semilla;
    return secuencia + '\n' + mayor;
}


