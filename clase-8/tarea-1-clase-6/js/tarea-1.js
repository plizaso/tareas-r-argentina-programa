document.querySelector('#btn-continuar').onclick = function () {
    const idCantidadIntegrantes = '#cantidad-integrantes';
    const cantidadIntegrantes = document.querySelector(idCantidadIntegrantes).value;
    const errorIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);
    if(!errorIntegrantes){
        ocultarError(idCantidadIntegrantes, errorIntegrantes);
        crearIntegrantes(Number(cantidadIntegrantes));
        deshabilitarBotonContinuar();
    }else{
        mostrarError(idCantidadIntegrantes, errorIntegrantes);
    }
    return false;
}

function mostrarError(id, error){
    let $input = document.querySelector(id);
    $input.className = 'error';
    $input.nextElementSibling.textContent = `*${error}`;
}

function ocultarError(id){
    let $input = document.querySelector(id);
    $input.className = '';
    $input.nextElementSibling.textContent = '';
}

function validarNumero(numero){
    if(numero===''){
        return 'El campo no debe estar vacio';
    }
    numero = Number(numero);
    if(isNaN(numero)){
        return 'El valor ingresado debe ser un numero';
    }
    if(numero<=0){
        return 'El numero debe ser mayor a 0';
    }
    if(!Number.isInteger(numero)){
        return 'El numero debe ser un entero'
    } 
    return '';
}

function validarCantidadIntegrantes(cantidadIntegrantes){
    return validarNumero(cantidadIntegrantes);
}

function validarEdad(edad){
    return validarNumero(edad);
}

function crearIntegrantes(cantidadIntegrantes) {
    let $integrantes = document.querySelector('#integrantes');
    for (let i = cantidadIntegrantes; i > 0; i--) {
        $integrantes.prepend(crearIntegrante(i));
    }
    mostrarIntegrantes();
}

function crearIntegrante(numero) {
    let $integrante = crearLabel(numero);
    $integrante.appendChild(crearInput(numero));
    $integrante.appendChild(crearError());
    return $integrante;
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

function crearError(){
    let $error = document.createElement('span');
    $error.className = 'error-text';
    return $error;
}

document.querySelector('#btn-calcular').onclick = function () {
    let edades = obtenerEdades();
    const errores = validarEdades(edades);
    const cantidadErrores = manejarErroresEdad(errores);
    if(cantidadErrores === 0){
        mostrarEdades(edades.map((edad) => Number(edad)));
    }else{
        borrarResultados();
    }
    return false;
}

function manejarErroresEdad(errores){
    let cantidadErrores = 0;
    for (let i = 0; i < errores.length; i++) {
        const error = errores[i];
        const idEdadIntegrante = `#edad-integrante-${i+1}`;
        if(error){
            cantidadErrores++;
            mostrarError(idEdadIntegrante, error);
        }else{
            ocultarError(idEdadIntegrante);
        }
    }
    return  cantidadErrores;
}

function obtenerEdades() {
    let $edadesIntegrantes = document.querySelectorAll('#integrantes input');
    let edades = [];
    $edadesIntegrantes.forEach($edad => {
        edades.push($edad.value);
    });
    return edades;
}

function validarEdades(edades) {
    const errores = [];
    edades.forEach(edad => {
        errores.push(validarEdad(edad));
    });
    return errores;
}

function mostrarEdades(edades) {
    mostrarEdad('#mayor-edad', obtenerMaximo(edades));
    mostrarEdad('#menor-edad', obtenerMinimo(edades));
    mostrarEdad('#edad-promedio', obtenerPromedio(edades));
    mostrarResultados();
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
    document.querySelector(id).className = '';
}

function ocultarElemento(id){
    document.querySelector(id).className = 'oculto';
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
