import { mostrarSeleccion } from "../services/serviceEjercicio24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById("resultado");

radios.forEach(radio => {
    radio.addEventListener("change", (evento) => {
        mostrarSeleccion(evento, resultado);
    });
});