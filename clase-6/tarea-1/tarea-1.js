document.querySelector('#btn-continuar').onclick = function(){
    let cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
    if(cantidadIntegrantes<=0){
        alert('La cantidad de integrantes debe ser un número positivo.');
        return false;
    }
    crearIntegrantes(cantidadIntegrantes);
    document.querySelector('#integrantes').setAttribute('style', 'display: block');
    document.querySelector('#btn-continuar').disabled = true;

    return false;
}

function crearIntegrantes(cantidadIntegrantes){
    let $integrantes = document.querySelector('#integrantes');
    for(let i=cantidadIntegrantes; i>0; i--){
        $integrantes.prepend(crearIntegrante(i));
    }
}

function crearIntegrante(numero){
    let idIntegrante = `edad-integrante-${numero}`;
    let $label = document.createElement('label');
    $label.textContent = `Edad integrante ${numero}: `;
    $label.setAttribute('for', idIntegrante);
    let $input = document.createElement('input');
    $input.setAttribute('id', idIntegrante);
    $input.setAttribute('type', 'number');
    $input.setAttribute('min', 1);
    $label.appendChild($input);
    
    return $label;
}

document.querySelector('#btn-calcular').onclick = function(){
    let $integrantes = document.querySelectorAll('#integrantes input');
    let edades = [];
    for(let i=0; i<$integrantes.length; i++){
        let edad = Number($integrantes[i].value);
        if(edad<=0){
            alert('Las edades deben ser mayores a 0.')
            return false;
        }
        edades.push(edad);
    }

    document.querySelector('#mayor-edad').textContent = `Mayor edad: ${obtenerMaximo(edades)} años`;
    document.querySelector('#menor-edad').textContent = `Menor edad: ${obtenerMinimo(edades)} años`;
    document.querySelector('#edad-promedio').textContent = `Edad promedio: ${obtenerPromedio(edades)} años`;
    document.querySelector('#resultados').setAttribute('style', 'display: block');

    return false;
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

