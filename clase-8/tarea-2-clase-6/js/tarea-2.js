document.querySelector('#btn-agregar').onclick = function () {
    let cantidadSalarios = document.querySelectorAll('#salarios label').length;
    crearSalario(cantidadSalarios);
    ocultarResultados();
    return false;
}

function crearSalario(numero) {
    let $label = crearLabel(numero);
    $label.appendChild(crearInput(numero));
    document.querySelector('#salarios').appendChild($label);
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

document.querySelector('#btn-quitar').onclick = function () {
    let cantidadSalarios = document.querySelectorAll('#salarios label').length;
    if (cantidadSalarios > 0) {
        borrarUltimoSalario();
        ocultarResultados()
    }
    return false;
}

function borrarUltimoSalario() {
    document.querySelector('#salarios').lastElementChild.remove();
}

document.querySelector('#btn-calcular').onclick = function () {
    let salarios = obtenerSalarios();
    if (salarios.length == 0) {
        alert('No hay salarios para calcular.')
        return false;
    }
    if (validarSalarios(salarios)) {
        mostrarSalarios(salarios);
        mostrarResultados();
    } else {
        alert('Los salarios deben ser mayores a 0');
    }
    return false;
}

function validarSalarios(salarios) {
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] <= 0) {
            return false;
        }
    }
    return true;
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

function obtenerSalarios() {
    let $salarios = document.querySelectorAll('#salarios input');
    let salarios = [];
    for (let i = 0; i < $salarios.length; i++) {
        let salario = $salarios[i].value;
        if (salario != '') {
            salarios.push(Number(salario));
        }
    }
    return salarios;
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
    document.querySelector('#resultados').setAttribute('style', 'display: none');
}

function mostrarResultados() {
    document.querySelector('#resultados').setAttribute('style', 'display: block');
}
