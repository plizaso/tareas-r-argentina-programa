document.querySelector('#btn-calcular').onclick = function(){
    let salarioAnual = Number(document.querySelector('#salario-anual').value);
    if(salarioAnual < 0){
        alert('El salario anual debe ser un número positivo');
        return;
    }
    document.querySelector('#salario-mensual').value = calcularSalarioMensual(salarioAnual);
    return false;
}

function calcularSalarioMensual(salarioAnual){
    const mesesEnUnAnio = 12;
    return salarioAnual/mesesEnUnAnio;
}
