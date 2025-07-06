let screen = document.getElementById("pantalla");
let cicle = document.getElementById("ciclo");
let btn = document.querySelector("#btn");
let timeWork = document.getElementById("timeWork")

function calcularProduccion(opcion) {
    let segundos = 3600;
    segundos /= parseInt(cicle.value);
    segundos *= timeWork.value;
    console.log(timeWork)

    if (cicle.value === "") {
        screen.value = `Error: Ingrese el ciclo de la máquina`;
        screen.style.color = "red";
    } else {
        let produccion1 = parseInt(segundos * 12);
        let produccion2 = parseInt(segundos * 8);
        let produccion3 = parseInt(segundos * 6);
        if (opcion === 1) {
            alert (`Ustede ha selecciona de la opcion #1 el MOLDE de 12 cavidades`)
            screen.value = `La producción es de: ${produccion1}`;
            screen.style.color = "green";
        } else if (opcion === 2) {
            alert (`Ustede ha selecciona de la opcion #2 el MOLDE de 8 cavidades`)
            screen.value = `La producción  es de: ${produccion2}`;
            screen.style.color = "chocolate";
        } else if (opcion === 3) {
            alert (`Ustede ha selecciona de la opcion #1 el MOLDE de 6 cavidades`)

            screen.value = `La producción  es de: ${produccion3}`;
            screen.style.color = "purple";
        } else {
            screen.value = "Opción inválida\n seleccione del 1 al 3";
            screen.style.color = "red";
        }
    }
}

// Changing logic --- Pending

function limpiarPantalla() {
    return screen.value = "";
}

// Agregar el evento de clic al botón de borrar
const btnLimpiar = document.querySelector("#clear");
btnLimpiar.addEventListener("click", limpiarPantalla);



// const btnLimpiar = document.querySelector("#clear");
// btnLimpiar.addEventListener("click", limpiarPantalla);

// let name


btn.addEventListener("click", () => {
    const opcion = parseInt(prompt("Seleccione una opción para calcula el ciclo:\n1. Opción para el molde de: 12\n2. Opción para el molde de:  8\n3. Opción para el molde de:  6"));
    calcularProduccion(opcion);
});


