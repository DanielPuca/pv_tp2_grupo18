
const arrayPaises = ["argentina","brasil","chile","uruguay","peru","colombia"];
const arrayCapitales = ["buenosaires","brasilia","santiago","montevideo","lima","bogota"];

document.addEventListener('DOMContentLoaded', () => {

    const paises = document.querySelector('#paises');
    const capitales = document.querySelector('#capitales');

    const contenedorResultado = document.querySelector('#resultado')

    paises.addEventListener('change', () =>{

        const selectPais = paises.value;

        const index = arrayPaises.indexOf(selectPais);
        
        if (index !== -1) {
            capitales.value = arrayCapitales[index];
        }

        contenedorResultado.innerHTML = `

            <p><strong>Pais:</strong> ${selectPais}</p>
            <p><strong>Capital:</strong> ${capitales.value}</p>
        `;
    });

});