const targetNumber = 27648;
let attemps = 1;

let userNumber = parseInt(prompt("Ingresa un numero!"));
while (userNumber != targetNumber) {

    if (isNaN(userNumber)) {
        break;
    }
    if (userNumber < targetNumber) {
        console.log("El numero secreto es mayor que "+ userNumber);
        userNumber = parseInt(prompt("El numero secreto es mayor que "+ userNumber));
    } else {
        console.log("El numero secreto es menor que " + userNumber);
        userNumber = parseInt(prompt("El numero secreto es menor que " + userNumber));
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

