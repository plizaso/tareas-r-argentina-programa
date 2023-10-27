document.querySelector('button').onclick = function(){
    const PRIMER_NOMBRE_USUARIO = document.querySelector('#primer-nombre-usuario').value.toUpperCase();
    const SEGUNDO_NOMBRE_USUARIO = document.querySelector('#segundo-nombre-usuario').value.toUpperCase();
    const APELLIDOS_USUARIO = document.querySelector('#apellidos-usuario').value.toUpperCase();
    const EDAD_USUARIO = Number(document.querySelector('#edad-usuario').value);
    document.querySelector('h1').textContent = `Bienvenido ${PRIMER_NOMBRE_USUARIO}!`;
    document.querySelector('#resultado-primer-nombre').textContent = `Primer nombre: ${PRIMER_NOMBRE_USUARIO}`;
    document.querySelector('#resultado-segundo-nombre').textContent = `Segundo nombre: ${SEGUNDO_NOMBRE_USUARIO}`;
    document.querySelector('#resultado-apellidos').textContent = `Apellido/s: ${APELLIDOS_USUARIO}`;
    document.querySelector('#resultado-edad').textContent = `Edad: ${EDAD_USUARIO} años`;

    return false;
}
