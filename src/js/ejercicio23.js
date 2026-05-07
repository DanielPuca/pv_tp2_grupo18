import { txtInput } from "../services/serviceEjercicio23.js";

const input = document.querySelector("#entrada");
const resultado = document.querySelector("#resultado");

input.addEventListener("input", (evento) => {
    txtInput(evento, resultado);
});