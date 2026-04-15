//commit 3: agregue event listener a boton & cree funcion cargarClima con funcionalidad basica

const boton = document.getElementById("cargarTmp");

boton.addEventListener("click", () => {
    cargarClima();
})

async function cargarClima() {
    const temperatura = 30;

    document.getElementById("temp").textContent = temperatura;

    if (temperatura >= 28) {
        icono.src = "./imgs/sunny.png";
    } else if (temperatura >= 10) {
        icono.src = "./imgs/fresh.png";
    } else {
        icono.src = "./imgs/cold.png";
    }
}
