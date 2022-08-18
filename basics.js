//Ejercicio 1
const userName = prompt("Ingresa tu nombre");
alert("Hola " + userName);

//Ejercicio 5

alert(userName.toLocaleLowerCase());

//Ejercicio 6
alert(userName.toLocaleUpperCase());

//Ejercio 7
const lastName = prompt("Ingresa tu apellido");
const age = prompt("Ingresa tu edad");
alert(`
    Nombre: ${userName}
    Apellito: ${lastName}
    Edad: ${age}
`);

//Ejercicio 2
const firstNumber = prompt("Ingresa el primer número");
const secondNumber = prompt("Ingresa el segundo número");
alert(
  `La suma de los dos números es: ${Number(firstNumber) + Number(secondNumber)}`
);

//Ejercicio 3
alert(
  `El doble de la suma de los dos números es: ${
    2 * (Number(firstNumber) + Number(secondNumber))
  }`
);

//Ejercico 4
const width = prompt("Ingresa el ancho de la habitacion en metros");
const high = prompt("Ingresa el alto de la habitacion en metros");
alert(`La superficie total es de: ${Number(width) * Number(high)} m2`);
