import { cambiarTexto } from "../services/serviceEjercicio19.js";

const parrafoTexto = document.getElementById("parrafoTexto");
const btnCambiarTexto = document.getElementById("btnCambiarTexto");

btnCambiarTexto.addEventListener("click", () => {
    cambiarTexto(parrafoTexto);
});