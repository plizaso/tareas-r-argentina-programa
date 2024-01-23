function probarValidarSalario(){
    console.assert(
        validarSalario('') === '',
        'validarSalario falla cuando no se ingresa un salario'
    );
    console.assert(
        validarSalario('-12000') === 'El salario debe ser mayor a 0',
        'validarSalario falla cuando el salario es negativo'
    );
    console.assert(
        validarSalario('12000') === '',
        'validarSalario falla con un salario valido'
    );
    console.assert(
        validarSalario('12000,50') === '',
        'validarSalario falla con un salario valido'
    );
    console.assert(
        validarSalario('12000.50') === '',
        'validarSalario falla con un salario valido'
    );
}

function probarObtenerMaximo(){
    console.assert(
        obtenerMaximo([1]) === 1,
        'obtenerMaximo falla con una lista de un numero entero positivo'
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
        'obtenerMinimo falla con una lista de un numero entero positivo'
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
        'obtenerPromedio falla con una lista de un numero entero positivo'
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

probarValidarSalario();
probarObtenerMaximo();
probarObtenerMinimo();
probarObtenerPromedio();
