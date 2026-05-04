export const ObtenerDatosAlumno = () => {
    const inputNombre = document.querySelector("#nombre");
    const inputApellido = document.querySelector("#apellido");
    const inputLU = document.querySelector("#lu");

    const nombreval = inputNombre.value;
    const apellidoval = inputApellido.value;
    const luval = inputLU.value;

    return { nombreval, apellidoval, luval };
}

export const CrearFicha = (nombreval, apellidoval, luval) =>{
    const fichaInfo = document.createElement('div');

    fichaInfo.innerHTML = `
        <h3>Ficha de Alumno</h3>
        <p><strong>Nombre:</strong> ${nombreval}</p>
        <p><strong>Apellido:</strong> ${apellidoval}</p>
        <p><strong>LU:</strong> ${luval}</p>
    `;

    return fichaInfo;
}