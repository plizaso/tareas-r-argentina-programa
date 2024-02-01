document.querySelector('#btn-agregar').onclick = function () {
    const cantidadSalarios = document.querySelectorAll('#salarios label').length;
    crearSalario(cantidadSalarios);
    ocultarResultados();
    ocultarElemento('#error-salarios');
    return false;
}

function crearSalario(numero) {
    let $label = crearLabel(numero);
    $label.appendChild(crearInput(numero));
    $label.appendChild(crearError());
    let $error= document.querySelector('#error-salarios');
    document.querySelector('#salarios').insertBefore($label, $error);
}

function crearLabel(numero) {
    let $label = document.createElement('label');
    $label.textContent = `Salario ${numero + 1}: `;
    $label.setAttribute('for', `salario-${numero + 1}`);
    return $label;
}

function crearInput(numero) {
    let $input = document.createElement('input');
    $input.setAttribute('id', `salario-${numero + 1}`);
    $input.setAttribute('type', 'number');
    $input.setAttribute('min', '1');
    return $input;
}

function crearError(){
    let $error = document.createElement('span');
    $error.className = 'error-text';
    return $error;
}

document.querySelector('#btn-quitar').onclick = function () {
    const cantidadSalarios = document.querySelectorAll('#salarios label').length;
    if (cantidadSalarios > 0) {
        borrarUltimoSalario();
        ocultarResultados();
        ocultarElemento('#error-salarios');
    }
    return false;
}

function borrarUltimoSalario() {
    document.querySelector('#error-salarios').previousElementSibling.remove();
}

document.querySelector('#btn-calcular').onclick = function () {
    ocultarResultados();
    ocultarElemento('#error-salarios');
    const salarios = obtenerSalarios();
    const erroresSalarios = validarSalarios(salarios);
    const cantidadErrores = manejarErroresSalarios(erroresSalarios);
    if(cantidadErrores===0){
        if(haySalarios(salarios)){
            mostrarSalarios(salarios.map((salario)=>Number(salario)));
            mostrarResultados();
        }else{
            mostrarElemento('#error-salarios');
        }
    }
    return false;
}

function haySalarios(salarios){
    for (let i = 0; i < salarios.length; i++) {
        if(salarios[i] !== ''){
            return true;
        }
    }
    return false;
}

function obtenerSalarios(){
    const $salarios = document.querySelectorAll('#salarios input');
    const salarios = [];
    $salarios.forEach($salario => {
        salarios.push($salario.value);
    });
    return salarios;
}

function validarSalarios(salarios){
    const errores = [];
    salarios.forEach(salario => {
        errores.push(validarSalario(salario));
    });
    return errores;
}

function manejarErroresSalarios(errores){
    let cantidadErrores = 0;
    for (let i = 0; i < errores.length; i++) {
        const error = errores[i];
        const idSalarioIntegrante = `#salario-${i + 1}`;
        if(error){
            cantidadErrores++;
            mostrarError(idSalarioIntegrante, error);
        }else{
            ocultarError(idSalarioIntegrante);
        }
    }
    return cantidadErrores;
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

function validarSalario(salario){
    if(salario!==''){
        salario = Number(salario);
        if(salario<=0){
            return 'El salario debe ser mayor a 0';
        }
    }
    return '';
}

function mostrarSalario(id, salario) {
    document.querySelector(id).textContent = salario.toString();
}

function mostrarSalarios(salarios) {
    mostrarSalario('#mayor-salario-anual', obtenerMaximo(salarios));
    mostrarSalario('#menor-salario-anual', obtenerMinimo(salarios));
    mostrarSalario('#promedio-salario-anual', obtenerPromedio(salarios));
    const MESES_EN_UN_ANIO = 12;
    mostrarSalario('#promedio-salario-mensual', obtenerPromedio(salarios) / MESES_EN_UN_ANIO);
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

function obtenerMinimo(numeros) {
    let min = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (min > numeros[i]) {
            min = numeros[i];
        }
    }
    return min;
}

function obtenerPromedio(numeros) {
    let sumaTotal = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return Math.round(sumaTotal / numeros.length);
}

function ocultarResultados() {
    ocultarElemento('#resultados');
}

function mostrarResultados() {
    mostrarElemento('#resultados');
}

function mostrarElemento(id){
    document.querySelector(id).classList.remove('oculto');
}

function ocultarElemento(id){
    document.querySelector(id).classList.add('oculto');
}
