
const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {
    if (nombre === '') {
        return 'Este campo debe tener al menos 1 caracter';
    }
    const CANTIDAD_MAXIMA_CARACTERES = 20;
    if (nombre.length > CANTIDAD_MAXIMA_CARACTERES) {
        return `Este campo debe tener menos de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`;
    }
    return '';
}

function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'No se ha seleccionado una ciudad';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo === '') {
        return 'Este campo no debe estar vacio';
    }
    const CANTIDAD_MAXIMA_CARACTERES = 50;
    if (descripcionRegalo.length > CANTIDAD_MAXIMA_CARACTERES) {
        return `Este campo debe tener menos de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`;
    }
    return '';
}
