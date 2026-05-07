// logica de negocio
import { guardarEstudianteEnArray, mostrarEstudiante } from "../services/serviceEjercicio20.js";
import { servicioAntonellaCsongedy } from "../services/serviceAntonellaCsongedy.js";

// Esperar al DOM
document.addEventListener('DOMContentLoaded', () => {
    
    servicioAntonellaCsongedy();

    const formulario = document.querySelector('#form-carga');
    const contenedorResultado = document.querySelector('#resultado');

    console.log(formulario);

    // Capturar datos
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const inputNombre = document.querySelector('#nombre');
        const inputApellido = document.querySelector('#apellido');
        const inputLU = document.querySelector('#lu');

        const nombreVal = inputNombre.value;
        const apellidoVal = inputApellido.value;
        const luVal = inputLU.value;

        const estudiante = {
            id: Date.now(),
            nombre: nombreVal,
            apellido: apellidoVal,
            lu: luVal
        };

        // llamada al service
        guardarEstudianteEnArray(estudiante);

        // Limpiar resultado anterior
        contenedorResultado.innerHTML = '';

        // Mostrar datos en pantalla
        contenedorResultado.appendChild(
            mostrarEstudiante(nombreVal, apellidoVal, luVal)
        );

        formulario.reset();
    });
});