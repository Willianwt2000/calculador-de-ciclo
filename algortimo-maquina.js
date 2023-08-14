let segundos = 3600;
function paquetesPorCiclo() {
    let select = parseInt(1)
    if (select === 1) {
        console.log(`Usted ha seleccionado el molde de 12 cavidades`)
        let ciclo = 15
        segundos/=ciclo;
        segundos*=12;
        return 'La produccion es de ' + parseInt(segundos*12);
    } else if (select === 2) {
        console.log(`Usted ha seleccionado el molde de 8 cavidades`)
        ciclo = 15
        segundos/=ciclo;
        segundos*=8;
        return 'La produccion es de ' + parseInt(segundos*12);
    } else if (select === 3) {
        console.log(`Usted ha seleccionado el molde de 6 cavidades`)
        ciclo = 11
        segundos/=ciclo;
        segundos*=6;
        return 'La produccion es de ' + parseInt(segundos*12);
    } else {
        console.log(`Hata ahora solo hay 3 maquinas Por favor seleccione de 1 al 3`)
    }
}


function seleccione() {
    const select = console.log(parseInt(`Seleccione la maquina que desea calcular\n 1# para el molde de 12\n #2 para el molde de 8\n #3 para el molde de`))

    if (select === 1) {
        return paquetesPorCiclo()
        
    }

    console.log(paquetesPorCiclo())
}

console.log(paquetesPorCiclo())