export const cambiarColorFondo = (elementoResultado) => {
    const colores = ["#f8c291", "#82ccdd", "#b8e994", "#f6b93b", "#d1ccc0", "#c7ecee"];
    const posicionAleatoria = Math.floor(Math.random() * colores.length);
    const colorSeleccionado = colores[posicionAleatoria];

    document.body.style.backgroundColor = colorSeleccionado;

    elementoResultado.textContent = `El color de fondo cambió a: ${colorSeleccionado}`;

    console.log(`El color de fondo cambió a: ${colorSeleccionado}`);
};