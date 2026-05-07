export const txtInput = (evento, resultado) => {
    const texto = evento.target.value;

    resultado.textContent = texto;

    if (texto.length > 20) {
        resultado.style.backgroundColor = "lightcoral";
    } else {
        resultado.style.backgroundColor = "#e5e7eb";
    }
};