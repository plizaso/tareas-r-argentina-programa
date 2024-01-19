function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
        'validarNombre no valido que el nombre no sea vacio',
    );

    const CANTIDAD_MAXIMA_CARACTERES = 20;
    console.assert(
        validarNombre('aaaaaaaaaaaaaaaaaaaaa') ===
        `El campo nombre debe tener menos de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`,
        `validarNombre falla cuando el nombre tiene mas de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`,
    );

    console.assert(
        validarNombre('11111') ===
        'El campo nombre debe tener solo letras',
        'validarNombre falla con un nombre que no tiene solo letras'
    );

    console.assert(
        validarNombre('Pablo') === '',
        'validarNombre falla con un nombre valido'
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'No se ha seleccionado una ciudad',
        'validarCiudad falla cuando el campo ciudad es vacio'
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcion no debe estar vacio',
        'validarDescripcionRegalo falla cuando la descripcion es vacia'
    );

    const CANTIDAD_MAXIMA_CARACTERES = 50;
    console.assert(
        validarDescripcionRegalo('111111111111111111111111111111111111111111111111111') ===
        `El campo descripcion debe tener menos de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`,
        `validarDescripcionRegalo falla cuando la descripcion tiene mas de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`
    );

    console.assert(
        validarDescripcionRegalo('Una lista de texto valida') === '',
        `validarDescripcionRegalo falla con una descripcion valida`
    );
    console.assert(
        validarDescripcionRegalo('abc.,@_') === 'El campo descripcion debe tener solo letras y numeros',
        'validarDescripcionRegalo falla cuando la descripcion tiene caracteres invalidos'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
