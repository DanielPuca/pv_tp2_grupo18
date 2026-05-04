export const mostrarSeleccion = (evento, elementoResultado) => {
    const valor = evento.target.value;

    elementoResultado.textContent = `Seleccionaste: ${valor}`;

    console.log(`Lenguaje seleccionado: ${valor}`);
};