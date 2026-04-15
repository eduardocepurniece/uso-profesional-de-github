//commit 4: Integre funcionamiento de la api a funcion cargarClima
const boton = document.getElementById("cargarTmp");

boton.addEventListener("click", () => {
    cargarClima();
})

async function cargarClima() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=18.4719&longitude=-69.8923&current=temperature_2m";

    const response = await fetch(url);
    const data = await response.json();

    const temperatura = Math.round(data.current.temperature_2m);

    document.getElementById("temp").textContent = temperatura;

    if (temperatura >= 28) {
        icono.src = "./imgs/sunny.png";
    } else if (temperatura >= 10) {
        icono.src = "./imgs/fresh.png";
    } else {
        icono.src = "./imgs/cold.png";
    }
}

