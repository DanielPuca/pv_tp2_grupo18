
let cantidad = prompt("Ingrese la cantidad de números que desea ingresar:");

let numeros = [];

let suma = 0;

for (let i = 0; i < cantidad; i++) {
    let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
let promedio = suma / numeros.length;


console.log("Numeros ingresados: " + numeros);
console.log("El promedio de los números es: " + promedio);