document.querySelector('#btn-continuar').onclick = function () {
    let cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
    if (cantidadIntegrantes <= 0) {
        alert('La cantidad de integrantes debe ser un número positivo.');
        return false;
    }
    crearIntegrantes(cantidadIntegrantes);
    mostrarIntegrantes();
    deshabilitarBotonContinuar()
    return false;
}

function crearIntegrantes(cantidadIntegrantes) {
    let $integrantes = document.querySelector('#integrantes');
    for (let i = cantidadIntegrantes; i > 0; i--) {
        $integrantes.prepend(crearIntegrante(i));
    }
}

function crearIntegrante(numero) {
    let $label = crearLabel(numero);
    $label.appendChild(crearInput(numero));
    return $label;
}

function crearLabel(numero) {
    let $label = document.createElement('label');
    $label.textContent = `Edad integrante ${numero}: `;
    $label.setAttribute('for', `edad-integrante-${numero}`);
    return $label;
}

function crearInput(numero) {
    let $input = document.createElement('input');
    $input.setAttribute('id', `edad-integrante-${numero}`);
    $input.setAttribute('type', 'number');
    $input.setAttribute('min', 1);
    return $input;
}

document.querySelector('#btn-calcular').onclick = function () {
    let edades = obtenerEdades();
    if (validarEdades(edades)) {
        mostrarEdades(edades);
        mostrarResultados();
    } else {
        alert('Las edades deben ser mayores a 0.');
    }
    return false;
}

function obtenerEdades() {
    let $integrantes = document.querySelectorAll('#integrantes input');
    let edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}

function validarEdades(edades) {
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] <= 0) {
            return false;
        }
    }
    return true;
}

function mostrarEdades(edades) {
    mostrarEdad('#mayor-edad', obtenerMaximo(edades));
    mostrarEdad('#menor-edad', obtenerMinimo(edades));
    mostrarEdad('#edad-promedio', obtenerPromedio(edades));
}

function mostrarEdad(id, edad) {
    document.querySelector(id).textContent = edad.toString();
}

function obtenerPromedio(numeros) {
    let sumaTotal = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return Math.round(sumaTotal / numeros.length);
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

document.querySelector('#btn-reiniciar').onclick = function () {
    borrarResultados();
    borrarIntegrantes();
    habilitarBotonContinuar();
    borrarCantidadIntegrantes();
    return false;
}

function borrarIntegrantes() {
    let $integrantes = document.querySelectorAll('#integrantes label');
    for (let i = 0; i < $integrantes.length; i++) {
        document.querySelector('#integrantes').removeChild($integrantes[i]);
    }
    ocultarIntegrantes();
}

function borrarCantidadIntegrantes() {
    document.querySelector('#cantidad-integrantes').value = '';
}

function mostrarIntegrantes() {
    mostrarElemento('#integrantes');
}

function mostrarResultados() {
    mostrarElemento('#resultados');
}

function ocultarIntegrantes() {
    ocultarElemento('#integrantes');
}

function ocultarResultados() {
    ocultarElemento('#resultados');
}

function mostrarElemento(id){
    document.querySelector(id).setAttribute('style', 'display: block');
}

function ocultarElemento(id){
    document.querySelector(id).setAttribute('style', 'display: none');
}

function deshabilitarBotonContinuar() {
    document.querySelector('#btn-continuar').disabled = true;
}

function habilitarBotonContinuar() {
    document.querySelector('#btn-continuar').disabled = false;
}

function borrarResultados() {
    borrarEdad('#mayor-edad');
    borrarEdad('#menor-edad');
    borrarEdad('#edad-promedio');
    ocultarResultados();
}

function borrarEdad(id) {
    document.querySelector(id).textContent = '';
}
