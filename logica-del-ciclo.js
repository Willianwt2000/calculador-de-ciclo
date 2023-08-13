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
        screen.value = `Error Ingrece el ciclo de la maquina!`
        screen.style.color = "red"
    } else {
        screen.value = `La producción es de: ${segundos * 12}`;
        screen.style.color = "green"
    }
    

    console.log("hola")
})
