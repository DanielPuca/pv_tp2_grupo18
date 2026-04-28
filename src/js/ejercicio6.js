    let edades = [12,13,5,22,23,18,33,41];

    const mostrarEdades = (edades) =>{
        edades.forEach(edad => {
            console.log(edad);
        });
    }
    const promedio = (edades) =>{
        let prom = 0;
        edades.forEach(edad => {
            prom = prom + edad;
        });
        prom = prom / edades.length;
        return prom;
    }

    mostrarEdades(edades);
    console.log(`El promedio de las edades es: ${promedio(edades)}`);