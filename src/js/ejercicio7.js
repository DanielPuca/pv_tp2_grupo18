
const nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Valentina"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

let nombreMasLargo = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}

console.log("Nombre más largo es:", nombreMasLargo);