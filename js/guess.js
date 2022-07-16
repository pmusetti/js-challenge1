const targetNumber = 27648;
let attemps = 1;

let userNumber = parseInt(prompt("Ingresa un numero!"));
while (userNumber != targetNumber) {

    if (isNaN(userNumber)) {
        break;
    }
    if (userNumber < targetNumber) {
        console.log("No es correcto, prueba con un numero mas grande!");
        userNumber = parseInt(prompt("Ingresa un numero mayor!"));
    } else {
        console.log("No es correcto, prueba con un numero mas chico");
        userNumber = parseInt(prompt("Ingresa un numero menor!"));
    }
    attemps += 1;

}

if (isNaN(userNumber)) {
    console.log("El juego terminó! Para volver a jugar presiona F5");
    alert("El  juego terminó! Para volver a jugar presiona F5");
} else {
    console.log("Felicitaciones, el numero correcto es " + targetNumber + ". Lo lograste en " + attemps + " intentos!");
    alert("Felicitaciones, el numero correcto es " + targetNumber + ". Lo lograste en " + attemps + " intentos!");
}

