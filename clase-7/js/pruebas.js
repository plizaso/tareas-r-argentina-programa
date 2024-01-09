function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'validarNombre no valido que el nombre no sea vacio',
    );

    const CANTIDAD_MAXIMA_CARACTERES = 20;
    console.assert(
        validarNombre('111111111111111111111') ===
        `Este campo debe tener menos de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`,
        `validarNombre falla cuando el nombre tiene mas de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`,
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
        validarDescripcionRegalo('') === 'Este campo no debe estar vacio',
        'validarDescripcionRegalo falla cuando la descripcion es vacia'
    );

    const CANTIDAD_MAXIMA_CARACTERES = 50;
    console.assert(
        validarDescripcionRegalo('111111111111111111111111111111111111111111111111111') ===
        `Este campo debe tener menos de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`,
        `validarDescripcionRegalo falla cuando la descripcion tiene mas de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`
    );

    console.assert(
        validarDescripcionRegalo('Una lista de texto valida') === '',
        `validarDescripcionRegalo falla con una descripcion valida`
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
