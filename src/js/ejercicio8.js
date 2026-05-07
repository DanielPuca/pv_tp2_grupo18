const notas = [5, 7, 8, 6, 9, 4, 10, 3, 2, 1];

let suma = 0;
let contador = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        console.log(notas[i] + ' - Aprobado');
        contador++;
    }
    else {        
        console.log(notas[i] + ' - Reprobado');
    }
    suma = suma + notas[i];
}

const promedio = suma / notas.length;

console.log('Promedio de notas:', promedio);
console.log('Cantidad de aprobados:', contador);
