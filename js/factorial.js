let factor = parseInt(prompt("Ingresa un numero para conocer su factorial!"));
let factorial = factor;

for (let i = factor; i > 1; i--) {
    console.log(factorial);
    factorial = factorial * (i - 1);
}
alert("El factorial de " + factor + " es " + factorial);
console.log("El factorial de " + factor + " es " + factorial);
