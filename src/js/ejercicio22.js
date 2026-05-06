    document.addEventListener('DOMContentLoaded', () => {

        const texto = document.querySelector('#texto');
        const contenedorResultado = document.querySelector('#resultado')

        texto.addEventListener('input', () =>{
            
            const valorTexto = texto.value;

            contenedorResultado.innerHTML = `

                <p><strong>text:</strong> ${valorTexto}</p>
            
            `;
        });

    });