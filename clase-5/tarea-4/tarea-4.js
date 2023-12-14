const numeros = obtenerNumeros();
document.querySelector('#promedio').textContent = `El promedio es ${obtenerPromedio(numeros)}`;
document.querySelector('#minimo').textContent = `El número más pequeño es ${obtenerMinimo(numeros)}`;
document.querySelector('#maximo').textContent = `El número más grande es ${obtenerMaximo(numeros)}`;
document.querySelector('#mas-frecuente').textContent = `El número más frecuente es ${obtenerMasFrecuente(numeros)}`;

function obtenerNumeros() {
    const $listaNumeros = document.querySelectorAll('li');
    const res = [];
    for (let i = 0; i < $listaNumeros.length; i++) {
        res.push(Number($listaNumeros[i].textContent));
    }
    return res;
}

function obtenerPromedio(numeros) {
    let sumaTotal = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return sumaTotal / numeros.length;
}

function obtenerMinimo(numeros) {
    let min = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (min > numeros[i]) {
            min = numeros[i];
        }
    }
    return min;
}

function obtenerMaximo(numeros) {
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (max < numeros[i]) {
            max = numeros[i];
        }
    }
    return max;
}

function obtenerMasFrecuente(numeros) {
    let numeroMasFrecuente = numeros[0];
    let cantidadMasFrecuente = obtenerCantRepeticiones(numeroMasFrecuente, numeros);
    for (let i = 1; i < numeros.length; i++) {
        if (numeroMasFrecuente !== numeros[i]) {
            let cantidadNueva = obtenerCantRepeticiones(numeros[i], numeros);
            if (cantidadNueva > cantidadMasFrecuente) {
                cantidadMasFrecuente = cantidadNueva;
                numeroMasFrecuente = numeros[i];
            }
        }
    }
    return numeroMasFrecuente;
}

function obtenerCantRepeticiones(n, numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (n === numeros[i]) {
            contador++;
        }
    }
    return contador;
}

