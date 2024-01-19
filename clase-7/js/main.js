function validarNombre(nombre) {
    if (nombre === '') {
        return 'El campo nombre debe tener al menos 1 caracter';
    }
    if (!/^[A-z]+$/.test(nombre)) {
        return 'El campo nombre debe tener solo letras';
    }
    const CANTIDAD_MAXIMA_CARACTERES = 20;
    if (nombre.length > CANTIDAD_MAXIMA_CARACTERES) {
        return `El campo nombre debe tener menos de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`;
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
        return 'El campo descripcion no debe estar vacio';
    }
    if (!/^[A-z0-9\s]+$/.test(descripcionRegalo)) {
        return 'El campo descripcion debe tener solo letras y numeros';
    }
    const CANTIDAD_MAXIMA_CARACTERES = 50;
    if (descripcionRegalo.length > CANTIDAD_MAXIMA_CARACTERES) {
        return `El campo descripcion debe tener menos de ${CANTIDAD_MAXIMA_CARACTERES} caracteres`;
    }
    return '';
}

function validarForm(event) {
    const $form = document.querySelector('#carta-a-santa');
    const errores = {
        nombre: validarNombre($form.nombre.value),
        ciudad: validarCiudad($form.ciudad.value),
        'descripcion-regalo': validarDescripcionRegalo($form['descripcion-regalo'].value)
    };
    const esExito = manejarErrores(errores) === 0;
    if (esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        setTimeout(function () {
            window.location.href = `wishlist.html`;
        }, 5000
        );
    }

    event.preventDefault();
}

function manejarErrores(errores) {
    let cantidadErrores = 0;
    const keys = Object.keys(errores);
    keys.forEach(function (key) {
        const error = errores[key];
        if (error) {
            cantidadErrores++;
            $form[key].className = 'error';
            crearError(key, error);
        } else {
            $form[key].className = '';
            borrarError(key);
        }
    });
    return cantidadErrores;
}

function crearError(key, error) {
    const $errores = document.querySelector('#errores');
    let $error = $errores.querySelector(`[name="${key}"]`);
    if ($error == null) {
        $error = document.createElement('li');
        $error.innerText = error;
        $error.setAttribute('name', key);
        $errores.appendChild($error);
    }
}

function borrarError(key) {
    const $error = document.querySelector(`#errores [name="${key}"]`);
    if ($error != null) {
        $error.remove();
    }
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarForm;
