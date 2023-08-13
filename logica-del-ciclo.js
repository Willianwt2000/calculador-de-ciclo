// let segundos = 3600;
// var resultado; 
// function paquetesPorCiclo(ciclo) {
//     ciclo = prompt('Por favor ingrese el ciclo de la maquina')
//     segundos/=ciclo;
//     segundos*=12;
//     return 'La produccion es de ' + parseInt(segundos*12);
// }
// // alert(paquetesPorCiclo())

let screen = document.getElementById("pantalla")
let cicle = document.getElementById("ciclo")
let btn = document.querySelector("#btn")



btn.addEventListener("click", () => {
    let segundos = 3600;
    segundos/= parseFloat(cicle.value)
    segundos*=12;

    if (cicle.value === "") {
        screen.value = `Error Ingrece el ciclo de la maquina`
        screen.style.color = "red"
    } else {
        // const produccion = Math.round(segundos * 12);
        // screen.value = `La producción es de: ${produccion}`;
        // screen.style.color = "green";
        screen.value = 'La producción es de: ' + parseInt(segundos * 12);
        screen.style.color = "green"
    }
    

    // Función para borrar el contenido de la pantalla y restablecer los estilos
function limpiarPantalla() {
    screen.value = "";
}

// Agregar el evento de clic al botón de borrar
const btnLimpiar = document.querySelector("#clear");
btnLimpiar.addEventListener("click", limpiarPantalla);

})
