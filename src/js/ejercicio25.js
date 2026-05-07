import { cambiarColorFondo } from "../services/serviceEjercicio25.js";

const btnCambiarFondo = document.getElementById("btnCambiarFondo");
const resultado = document.getElementById("resultado");

btnCambiarFondo.addEventListener("click", () => {
    cambiarColorFondo(resultado);
});