//import { servicioDanielPuca } from "../services/servicesDanielPuca";
import { ObtenerDatosAlumno, CrearFicha } from "../services/serviceEjercicio20.js";

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector("#form-carga");
    const resultado = document.querySelector("#resultado");

    formulario.addEventListener('submit',(evento) => {
       
        evento.preventDefault();

        const datos = ObtenerDatosAlumno();

        resultado.innerHTML = '';

        const ficha = CrearFicha(
            datos.nombreval,
            datos.apellidoval,
            datos.luval
        );

        resultado.appendChild(ficha);
    });
});