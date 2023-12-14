document.querySelector('button').onclick = function () {
    const primerNombreUsuario = capitalizarPalabras(document.querySelector('#primer-nombre-usuario').value);
    const segundoNombreUsuario = capitalizarPalabras(document.querySelector('#segundo-nombre-usuario').value);
    const apellidosUsuario = capitalizarPalabras(document.querySelector('#apellidos-usuario').value);
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    document.querySelector('h1').textContent = `Bienvenido ${primerNombreUsuario}!`;
    document.querySelector('#resultado-primer-nombre').textContent = `Primer nombre: ${primerNombreUsuario}`;
    document.querySelector('#resultado-segundo-nombre').textContent = `Segundo nombre: ${segundoNombreUsuario}`;
    document.querySelector('#resultado-apellidos').textContent = `Apellido/s: ${apellidosUsuario}`;
    document.querySelector('#resultado-edad').textContent = `Edad: ${edadUsuario} años`;

    return false;
}


function capitalizarPalabras(texto) {
    const palabras = texto.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(" ");    
}
