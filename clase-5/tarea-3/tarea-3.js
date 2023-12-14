document.querySelector('#btn-calcular').onclick = function(){
    const SEGUNDOS_EN_UN_MINUTO = 60;
    const MINUTOS_EN_UNA_HORA = 60;
    let totalSegundos = obtenerSegundos();
    let totalMinutos = obtenerMinutos() + Math.floor(totalSegundos/SEGUNDOS_EN_UN_MINUTO);
    let totalHoras = obtenerHoras() + Math.floor(totalMinutos/MINUTOS_EN_UNA_HORA);
    totalSegundos %= SEGUNDOS_EN_UN_MINUTO;
    totalMinutos %= MINUTOS_EN_UNA_HORA;

    document.querySelector('#tiempo-total').textContent = `Tiempo total: ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundos} segundos`;

    return false;
}

function obtenerHoras(){
    const $horas = document.querySelectorAll('.horas');
    let horas = 0;
    for(let i=0; i<$horas.length; i++){
        horas += Number($horas[i].value);
    }
    return horas;
}

function obtenerMinutos(){
    const $minutos = document.querySelectorAll('.minutos');
    let minutos = 0;
    for(let i=0; i<$minutos.length; i++){
        minutos += Number($minutos[i].value);
    }
    return minutos;
}

function obtenerSegundos(){
    const $segundos = document.querySelectorAll('.segundos');
    let segundos = 0;
    for(let i=0; i<$segundos.length; i++){
        segundos += Number($segundos[i].value);
    }
    return segundos;
}
