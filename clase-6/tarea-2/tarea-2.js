let cantidadSalarios = 0;

document.querySelector('#btn-agregar').onclick = function () {
    crearSalario();
    cantidadSalarios++;
    document.querySelector('#resultados').setAttribute('style', 'display: none');
    return false;
}

function crearSalario() {
    let $label = document.createElement('label');
    $label.textContent = `Salario ${cantidadSalarios + 1}: `;
    let idSalario = `salario-${cantidadSalarios + 1}`;
    $label.setAttribute('for', idSalario);
    let $input = document.createElement('input');
    $input.setAttribute('id', idSalario);
    $input.setAttribute('type', 'number');
    $input.setAttribute('min', '1');
    $label.appendChild($input);
    document.querySelector('#salarios').appendChild($label);
}

document.querySelector('#btn-quitar').onclick = function () {
    if(cantidadSalarios>0){
        document.querySelector('#salarios').lastElementChild.remove();
        cantidadSalarios--;        
        document.querySelector('#resultados').setAttribute('style', 'display: none');
    }
    return false;
}

document.querySelector('#btn-calcular').onclick = function () {
    let salarios = obtenerSalarios();
    if(salarios.length!=0){
        for(let i=0; i<salarios.length; i++){
            if(salarios[i]<=0){
                alert('Los salarios deben ser mayores a 0');
                return;
            }
        }
        document.querySelector('#mayor-salario-anual').textContent = `Mayor salario anual: $ ${obtenerMaximo(salarios)}`;
        document.querySelector('#menor-salario-anual').textContent = `Menor salario anual: $ ${obtenerMinimo(salarios)}`;
        document.querySelector('#promedio-salario-anual').textContent = `Salario anual promedio: $ ${obtenerPromedio(salarios)}`;
        const MESES_EN_UN_ANIO = 12;
        document.querySelector('#promedio-salario-mensual').textContent = `Salario mensual promedio: $ ${obtenerPromedio(salarios) / MESES_EN_UN_ANIO}`;
        document.querySelector('#resultados').setAttribute('style', 'display: block');
    }else{
        alert('No hay salarios para calcular.')
    }
    return false;
}

function obtenerSalarios() {
    let $salarios = document.querySelectorAll('#salarios input');
    let salarios = [];
    for (let i = 0; i < $salarios.length; i++) {
        let salario = $salarios[i].value;
        if(salario!=''){
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

