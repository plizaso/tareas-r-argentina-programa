function probarValidarNumero(){
    console.assert(
        validarNumero('') === 'El campo no debe estar vacio',
        'validarNumero falla cuando el valor ingresado es vacio'
    );
    console.assert(
        validarNumero('aaaa') === 'El valor ingresado debe ser un numero',
        'validarNumero falla cuando el valor ingresado no es un numero'
    );
    console.assert(
        validarNumero('0') === 'El numero debe ser mayor a 0',
        'validarNumero falla cuando el valor ingresado es 0'
    );
    console.assert(
        validarNumero('-1') === 'El numero debe ser mayor a 0',
        'validarNumero falla cuando el valor ingresado es un numero negativo'
    );
    console.assert(
        validarNumero('1.42') === 'El numero debe ser un entero',
        'validarNumero falla cuando el valor ingresado es un numero con decimales'
    );
    console.assert(
        validarNumero('1') === '',
        'validarNumero falla cuando el valor ingresado es un numero valido(entero positivo)'
    );
}

function probarObtenerMaximo(){
    console.assert(
        obtenerMaximo([1]) === 1,
        'obtenerMaximo falla con una lista de un elemento'
    );
    console.assert(
        obtenerMaximo([1, 2]) === 2,
        'obtenerMaximo falla con una lista de numeros enteros positivos ascendente'
    );
    console.assert(
        obtenerMaximo([2, 1]) === 2,
        'obtenerMaximo falla con una lista de numeros enteros positivos descendente'
    );
    console.assert(
        obtenerMaximo([1, 3, 2]) === 3,
        'obtenerMaximo falla con una lista de numeros enteros positivos desordenada'
    );
}

function probarObtenerMinimo(){
    console.assert(
        obtenerMinimo([1]) === 1,
        'obtenerMinimo falla con una lista de un elemento'
    );
    console.assert(
        obtenerMinimo([1, 2]) === 1,
        'obtenerMinimo falla con una lista de numeros enteros positivos ascendente'
    );
    console.assert(
        obtenerMinimo([2, 1]) === 1,
        'obtenerMinimo falla con una lista de numeros enteros positivos descendente'
    );
    console.assert(
        obtenerMinimo([1, 3, 2]) === 1,
        'obtenerMinimo falla con una lista de numeros enteros positivos desordenada'
    );
}
function probarObtenerPromedio(){
    console.assert(
        obtenerPromedio([1]) === 1,
        'obtenerPromedio falla con una lista de un elemento'
    );
    console.assert(
        obtenerPromedio([1, 2]) === 2,
        'obtenerPromedio falla con una lista de numeros enteros positivos ascendente'
    );
    console.assert(
        obtenerPromedio([2, 1]) === 2,
        'obtenerPromedio falla con una lista de numeros enteros positivos descendente'
    );
    console.assert(
        obtenerPromedio([1, 3, 2]) === 2,
        'obtenerPromedio falla con una lista de numeros enteros positivos desordenada'
    );
}

probarValidarNumero();
probarObtenerMaximo();
probarObtenerMinimo();
probarObtenerPromedio();
