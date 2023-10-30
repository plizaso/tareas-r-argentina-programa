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

function obtenerPromedio(a) {
    let sumaTotal = a[0];
    for (let i = 1; i < a.length; i++) {
        sumaTotal += a[i];
    }
    return sumaTotal / a.length;
}

function obtenerMinimo(a) {
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
        if (min > a[i]) {
            min = a[i];
        }
    }
    return min;
}

function obtenerMaximo(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i];
        }
    }
    return max;
}

function obtenerMasFrecuente(a) {
    let numeroMasFrecuente = a[0];
    let cantidadMasFrecuente = obtenerCantRepeticiones(numeroMasFrecuente, a);
    for (let i = 1; i < a.length; i++) {
        if (numeroMasFrecuente !== a[i]) {
            let cantidadNueva = obtenerCantRepeticiones(a[i], a);
            if (cantidadNueva > cantidadMasFrecuente) {
                cantidadMasFrecuente = cantidadNueva;
                numeroMasFrecuente = a[i];
            }
        }
    }
    return numeroMasFrecuente;
}

function obtenerCantRepeticiones(n, a) {
    let contador = 0;
    for (let i = 0; i < a.length; i++) {
        if (n === a[i]) {
            contador++;
        }
    }
    return contador;
}

